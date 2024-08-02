from flask import Flask, jsonify ,request
from flask_mysqldb import MySQL
from flask_cors import CORS
import jwt
import datetime
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'sonu050399'
app.config['MYSQL_DB'] = 'dashboard_db'
app.config['SECRET_KEY'] = 'sonu050399'

mysql = MySQL(app)
 

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM users WHERE username = %s AND password = %s', (username, password))
    user = cur.fetchone()
    cur.close()
    

    if user:
        token = create_access_token(identity=user['id'], expires_delta=datetime.timedelta(hours=1))
        return jsonify({'token': token})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/response_times', methods=['GET'])
def get_response_times():
    cur = mysql.connection.cursor()
    cur.execute("SELECT avg_response_time, last_month_response_time FROM response_times ORDER BY id DESC LIMIT 1")
    data = cur.fetchone()
    result = {
        "avgResponseTime": data[0],
        "lastMonthResponseTime": data[1]
    }
    cur.close()
    return jsonify(result)

@app.route('/api/satisfaction_scores', methods=['GET'])
def get_satisfaction_scores():
    cur = mysql.connection.cursor()
    cur.execute("SELECT current, last_month FROM satisfaction_scores ORDER BY id DESC LIMIT 1")
    data = cur.fetchone()
    result = {
        "current": data[0],
        "lastMonth": data[1]
    }
    cur.close()
    return jsonify(result)

@app.route('/api/effort_scores', methods=['GET'])
def get_effort_scores():
    cur = mysql.connection.cursor()
    cur.execute("SELECT score FROM effort_scores ORDER BY id DESC LIMIT 1")
    data = cur.fetchone()
    result = {
        "ces": data[0]
    }
    cur.close()
    return jsonify(result)

@app.route('/api/promoter_scores', methods=['GET'])
def get_promoter_scores():
    cur = mysql.connection.cursor()
    cur.execute("SELECT nps, promoters, passives, detractors FROM promoter_scores ORDER BY id DESC LIMIT 1")
    data = cur.fetchone()
    result = {
        "nps": data[0],
        "promoters": data[1],
        "passives": data[2],
        "detractors": data[3]
    }
    cur.close()
    return jsonify(result)

@app.route('/api/satisfaction_breakdown', methods=['GET'])
def get_satisfaction_breakdown():
    cur = mysql.connection.cursor()
    cur.execute("SELECT category, percentage FROM satisfaction_breakdown")
    data = cur.fetchall()
    result = [{"category": row[0], "percentage": row[1]} for row in data]
    cur.close()
    return jsonify(result)

@app.route('/api/response_time_over_month', methods=['GET'])
def get_response_time_over_month():
    cur = mysql.connection.cursor()
    cur.execute("SELECT month, response_time FROM response_time_over_month")
    data = cur.fetchall()
    result = [{"month": row[0], "responseTime": row[1]} for row in data]
    cur.close()
    return jsonify(result)

@app.route('/api/csat_over_month', methods=['GET'])
def get_csat_over_month():
    cur = mysql.connection.cursor()
    cur.execute("SELECT month, csat FROM csat_over_month")
    data = cur.fetchall()
    result = [{"month": row[0], "csat": row[1]} for row in data]
    cur.close()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
