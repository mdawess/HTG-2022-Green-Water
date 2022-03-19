from flask import Flask, jsonify
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


@app.route('/<string:data_path>', methods=['GET'])
def get_data_from_nyanda(data_path):
    """
    Pull the data from the data visualization files    
    """


if __name__ == '__main__':
    app.run(host='192.168.0.233', port=5000, debug=True)
