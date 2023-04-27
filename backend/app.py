#Creating an API REST server
    # - Select, Update, Delete, Modify and Insert operations (MySQL database)

#Requirements
    #-Python (3.7 and above)
    #-XAMPP (Apache + MySQL installed)
    #-Python modules
        #-Flask
        #-Jsonify
        #-Flask-restful
        #-Flask-mysql
        #-PyMySQL
        #-Flask-cors
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
