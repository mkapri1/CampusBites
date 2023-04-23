import pymysql
from app import app
from db_config import mysql
from flask import jsonify
from flask import flash, request

app = Flask(__name__)
conn = mysql.connect()
cur = conn.cursor(pymysql.cursors.DictCursor)

@app.route('/reviews/review_text')
def index():
    cur.execute("SELECT * FROM comments")
    comments = cur.fetchall()
    return render_template('index.html', comments=comments)

@app.route('/reviews/review_text', methods=['POST'])
def add_comment():
    comment = request.json['comment']
    cur.execute("INSERT INTO comments (comment) VALUES (%s)", (comment,))
    db.commit()
    return jsonify({'success': True})

@app.route('/reviews/review_text', methods=['POST'])
def delete_comment():
    comment_id = request.json['comment_id']
    cur.execute("DELETE FROM comments WHERE id = %s", (comment_id,))
    db.commit()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
