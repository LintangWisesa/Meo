/**
 * Generated by Eclipse Mita 0.1.0.
 * @date 2019-11-03 00:58:19
 */


#include <BCDS_Basics.h>
#include <wlan.h>
#include <Serval_Ip.h>
#include <Serval_Network.h>
#include <BCDS_WlanNetworkConfig.h>
#include <BCDS_Wlan.h>
#include <XdkCommonInfo.h>
#include <inttypes.h>
#include <BCDS_WlanNetworkConnect.h>
#include <semphr.h>
#include <BCDS_Retcode.h>
#include "MitaExceptions.h"

static SemaphoreHandle_t WlanEventSemaphore = NULL;
static SemaphoreHandle_t NetworkConfigSemaphore = NULL;
#define NETWORK_SSID  "Lintang"
#define NETWORK_PSK  "lintang2611"

static void ConnectivityWLANWifi_WlanConnectStatusCallback(WlanNetworkConnect_Status_T connectStatus)
{
	BCDS_UNUSED(connectStatus);
	(void) xSemaphoreGive(WlanEventSemaphore);
}
static void ConnectivityWLANWifi_NetworkIpConfigStatusCallback(WlanNetworkConfig_IpStatus_T ipStatus)
{
	BCDS_UNUSED(ipStatus);
	(void) xSemaphoreGive(NetworkConfigSemaphore);
}

static Retcode_T WlanEventSemaphoreHandle(void)
{
    Retcode_T exception = RETCODE_OK;
    uint8_t count = 0;
    if (pdTRUE == xSemaphoreTake(WlanEventSemaphore, 200000))
    {
        do
        {
            if ((WLANNWCNF_IPSTATUS_IPV4_AQRD == WlanNetworkConfig_GetIpStatus()) && (WLANNWCT_STATUS_CONNECTED == WlanNetworkConnect_GetStatus()))
            {
                exception = RETCODE_OK;
            }
            else
            {
                vTaskDelay(500);
                count++;
                exception = RETCODE(RETCODE_SEVERITY_ERROR, RETCODE_WLAN_CONNECT_FAILED);
            }
        } while ((RETCODE_OK != exception)
                && (UINT8_C(5) >= count));
    }
    else
    {
        exception = RETCODE(RETCODE_SEVERITY_ERROR, RETCODE_SEMAPHORE_ERROR);
    }
    return exception;
}

Retcode_T ConnectivityWLANWifi_Setup(void)
{
	Retcode_T exception = RETCODE_OK;
	
	
	NetworkConfigSemaphore = xSemaphoreCreateBinary();
	if (NULL == NetworkConfigSemaphore)
	{
	    printf("Failed to create Semaphore \r\n");
	    return RETCODE(RETCODE_SEVERITY_ERROR, RETCODE_SEMAPHORE_ERROR);
	}
	
	WlanEventSemaphore = xSemaphoreCreateBinary();
	if (NULL == WlanEventSemaphore)
	{
	    vSemaphoreDelete(NetworkConfigSemaphore);
	    printf("Failed to create Semaphore \r\n");
	    return RETCODE(RETCODE_SEVERITY_ERROR, RETCODE_SEMAPHORE_ERROR);
	}
	
	return (exception);
	
	return NO_EXCEPTION;
}

Retcode_T ConnectivityWLANWifi_Enable(void)
{
	
	Retcode_T exception = RETCODE_OK;
	
	/* Initialize the Wireless Network Driver */
	exception = WlanNetworkConnect_Init(ConnectivityWLANWifi_WlanConnectStatusCallback);
	if(exception == NO_EXCEPTION)
	{
		printf("[INFO, %s:%d] init WlanNetworkConnect succeeded\n", __FILE__, __LINE__);
	}
	else
	{
		printf("[ERROR, %s:%d] failed to init WlanNetworkConnect\n", __FILE__, __LINE__);
		return exception;
	}
	/* Semaphore take to flush the existing queue events without timeout. Hence no need to consider the return value */
	(void) xSemaphoreTake(WlanEventSemaphore, 0U);
			
	/* Semaphore take to flush the existing queue events without timeout. Hence no need to consider the return value */
	(void) xSemaphoreTake(NetworkConfigSemaphore, 0U);
	exception = WlanNetworkConfig_SetIpDhcp(ConnectivityWLANWifi_NetworkIpConfigStatusCallback);
	if(exception == NO_EXCEPTION)
	{
		printf("[INFO, %s:%d] setting DHCP succeeded\n", __FILE__, __LINE__);
	}
	else
	{
		printf("[ERROR, %s:%d] failed to setting DHCP\n", __FILE__, __LINE__);
		return exception;
	}
	
	printf("[INFO, %s:%d] Connecting to personal network: %s\n", __FILE__, __LINE__, NETWORK_SSID);
	exception = WlanNetworkConnect_PersonalWPA((WlanNetworkConnect_SSID_T) NETWORK_SSID, (WlanNetworkConnect_PassPhrase_T) NETWORK_PSK);
	if(RETCODE_OK != exception)
	{
		return exception;
	}
	
	if (pdTRUE == xSemaphoreTake(NetworkConfigSemaphore, 200000))
	{
	    exception = WlanEventSemaphoreHandle();
	}
	else
	{
	    exception = RETCODE(RETCODE_SEVERITY_ERROR, RETCODE_SEMAPHORE_ERROR);
	}
	
	WlanNetworkConfig_IpSettings_T currentIpSettings;
	exception = WlanNetworkConfig_GetIpSettings(&currentIpSettings);
	if(RETCODE_OK != exception)
	{
		return exception;
	}
	else
	{
		uint32_t ipAddress = Basics_htonl(currentIpSettings.ipV4);
	
		char humanReadableIpAddress[SERVAL_IP_ADDR_LEN] = { 0 };
		int conversionStatus = Ip_convertAddrToString(&ipAddress, humanReadableIpAddress);
		if (conversionStatus < 0)
		{
			printf("[WARNING, %s:%d] Couldn't convert the IP address to string format\n", __FILE__, __LINE__);
		}
		else
		{
			printf("[INFO, %s:%d] Connected to WLAN. IP address of this device is: %s\n", __FILE__, __LINE__, humanReadableIpAddress);
		}
	}
	
	return RETCODE_OK;
	
	return NO_EXCEPTION;
}


