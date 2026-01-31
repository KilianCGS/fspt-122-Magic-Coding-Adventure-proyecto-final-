from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from api.routes import api
from api.models import db

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = "supersecretkey"

db.init_app(app)
jwt = JWTManager(app)

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
            "supports_credentials": True
        }
    }
)

app.register_blueprint(api, url_prefix="/api")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  
    app.run(debug=True, port=5000)
