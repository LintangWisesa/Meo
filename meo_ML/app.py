from flask import Flask, render_template, send_from_directory, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('app.html')
    # render html file from templates dir

@app.route('/ok')
def tesok():
    return jsonify({'status': 'OK'})

@app.route('/img/<path:x>')
def staticfile(x):
    return send_from_directory('img', x)

# ============================================================================
# predict toyota car price
# [
# 'km' 'tahun' 
# 'nama_Alphard' 'nama_Avanza' 'nama_Calya' 'nama_Kijang Innova' 'nama_Sienta' 'nama_Vellfire' 'nama_Veloz' 'nama_Venturer' 'nama_Voxy'
# 'bbm_bensin' 'bbm_diesel' 
# 'transmisi_manual' 'transmisi_otomatis'
# ]
@app.route('/prediksi', methods = ['GET', 'POST'])
def prediksi():
    if request.method == 'POST':
        nama = {
            'Alphard': [1,0,0,0,0,0,0,0,0],
            'Avanza': [0,1,0,0,0,0,0,0,0],
            'Calya': [0,0,1,0,0,0,0,0,0],
            'Kijang Innova': [0,0,0,1,0,0,0,0,0],
            'Sienta': [0,0,0,0,1,0,0,0,0],
            'Vellfire': [0,0,0,0,0,1,0,0,0],
            'Veloz': [0,0,0,0,0,0,1,0,0],
            'Venturer': [0,0,0,0,0,0,0,1,0],
            'Voxy': [0,0,0,0,0,0,0,0,1]
        }
        bbm = {
            'bensin': [1,0],
            'diesel': [0,1]
        }
        transmisi = {
            'manual': [1,0],
            'otomatis': [0,1]
        }

        body = request.json
        
        pkm = float(body['km']) / 1000
        pth = float(body['tahun'])
        pnama = body['nama']
        pbbm = body['bbm']
        ptransmisi = body['transmisi']
        foto = body['foto']
        
        dnama = nama[body['nama']]
        dbbm = bbm[body['bbm']]
        dtransmisi = transmisi[body['transmisi']]
        data = [pkm, pth] + dnama + dbbm + dtransmisi
        zprediksi = int(round(model.predict([data])[0] * 1000000))
        
        if zprediksi < 40000000:
            zprediksi = 60000000

        print(zprediksi)
        return jsonify({
            'response' : 'ok',
            'pkm': int(pkm * 1000),
            'pth': int(pth),
            'pnama': pnama,
            'pbbm': pbbm,
            'ptransmisi': ptransmisi,
            'data': data,
            'zprediksi': zprediksi,
            'foto': foto
        })

if __name__ == '__main__':
    model = joblib.load('meomodel')
    app.run(debug = True)