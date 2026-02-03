from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity
)

from api.models import db, User

api = Blueprint("api", __name__)

# REGISTER
@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    if not data:
        return jsonify({"msg": "No data"}), 400

    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"msg": "Faltan campos"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Usuario ya existe"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email ya registrado"}), 400

    user = User(
        username=username,
        email=email,
        password=generate_password_hash(password)
    )

    db.session.add(user)
    db.session.commit()

    token = create_access_token(identity=str(user.id))

    return jsonify({
        "access_token": token,
        "user": {
            "id": user.id,
            "username": user.username,
            "avatar": user.avatar
        }
    }), 201


# LOGIN
@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    if not data:
        return jsonify({"msg": "No data"}), 400

    user = User.query.filter_by(username=data.get("username")).first()

    if not user or not check_password_hash(user.password, data.get("password")):
        return jsonify({"msg": "Credenciales incorrectas"}), 401

    token = create_access_token(identity=str(user.id))

    return jsonify({
        "access_token": token,
        "user": {
            "id": user.id,
            "username": user.username,
            "avatar": user.avatar
        }
    }), 200


# ME
@api.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)

    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "avatar": user.avatar
    }), 200


# AVATAR
@api.route("/avatar", methods=["POST"])
@jwt_required()
def save_avatar():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)

    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    avatar = request.get_json()
    if not avatar:
        return jsonify({"msg": "Avatar vacío"}), 400

    user.avatar = avatar
    db.session.commit()

    return jsonify({"msg": "Avatar guardado"}), 200
