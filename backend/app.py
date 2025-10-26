from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/users', methods=['POST'])
def create_user():
    return jsonify({"status": "User created"})

if __name__ == '__main__':
    app.run(debug=True)