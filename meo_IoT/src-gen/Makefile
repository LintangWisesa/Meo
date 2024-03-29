# This makefile triggers the targets in the application.mk

# The default value "../../.." assumes that this makefile is placed in the 
# folder xdk110/Apps/<App Folder> where the BCDS_BASE_DIR is the parent of 
# the xdk110 folder.
BCDS_BASE_DIR ?= ../../..

# Macro to define Start-up method. change this macro to "CUSTOM_STARTUP" to have custom start-up.
export BCDS_SYSTEM_STARTUP_METHOD = DEFAULT_STARTUP
export BCDS_APP_NAME = EclipseMitaApplication
export BCDS_APP_DIR = $(CURDIR)
export BCDS_APP_SOURCE_DIR = $(BCDS_APP_DIR)

#Please refer BCDS_CFLAGS_COMMON variable in application.mk file
#and if any addition flags required then add that flags only in the below macro 
#export BCDS_CFLAGS_COMMON = 


#List all the application header file under variable BCDS_XDK_INCLUDES 
export BCDS_XDK_INCLUDES = \
	-I$(BCDS_BASE_DIR)/xdk110/Libraries/BSTLib/3rd-party/bstlib/BMA2x2_driver \
	-I$(BCDS_BASE_DIR)/xdk110/Platform/BSP/source \
	-I$(BCDS_APP_SOURCE_DIR) \
	-I$(BCDS_APP_SOURCE_DIR)/.. \
	-I$(BCDS_APP_SOURCE_DIR)/base \
	-I$(BCDS_BASE_DIR)/xdk110/Common/include \
	-I$(BCDS_BASE_DIR)/xdk110/Common/certs/XDKDummy \
	-I$(BCDS_BASE_DIR)/xdk110/Common/source/Private/ServalStack/src/TLS_MbedTLS \
	-I$(BCDS_BASE_DIR)/xdk110/Common/source \
	-I$(BCDS_BASE_DIR)/xdk110/Common/source/Connectivity \
	-I$(BCDS_BASE_DIR)/xdk110/Platform/BSP/source
	
#List all the application source file under variable BCDS_XDK_APP_SOURCE_FILES in a similar pattern as below
export BCDS_XDK_APP_SOURCE_FILES = \
	$(BCDS_APP_SOURCE_DIR)/main.c \
	$(BCDS_APP_SOURCE_DIR)/base/MitaTime.c \
	$(BCDS_APP_SOURCE_DIR)/base/ConnectivityWLANWifi.c \
	$(BCDS_APP_SOURCE_DIR)/base/ConnectivityHttpRestClientServer.c \
	$(BCDS_APP_SOURCE_DIR)/base/SensorAccelerometer.c \
	$(BCDS_APP_SOURCE_DIR)/base/SensorGyroscope.c \
	$(BCDS_APP_SOURCE_DIR)/base/SensorEnvironment.c \
	$(BCDS_APP_SOURCE_DIR)/base/SensorLight.c \
	$(BCDS_APP_SOURCE_DIR)/application.c

.PHONY: clean debug release flash_debug_bin flash_release_bin

clean: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk clean

debug: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk debug
	
release: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk release
	
flash_debug_bin: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk flash_debug_bin
	
flash_release_bin: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk flash_release_bin

cleanlint: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk cleanlint
	
lint: 
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk lint

cdt:
	$(MAKE) -C $(BCDS_BASE_DIR)/xdk110/Common -f application.mk cdt	


