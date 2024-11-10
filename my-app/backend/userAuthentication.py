from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# Sample in-memory user data storage
users = [
    {"email": "user1@example.com", "password": "pass1", "username": "user1"},
    {"email": "user2@example.com", "password": "pass2", "username": "user2"}
]

@app.route('/login', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    entered_email = data.get('email')
    entered_password = data.get('password')

    # Check if the entered email and password match any user in the list
    for user in users:
        if user['email'] == entered_email and user['password'] == entered_password:
            return jsonify({"authenticated": True, "message": "Login successful"})
    return jsonify({"authenticated": False, "message": "Login failed. Incorrect email or password"})

@app.route('/signup', methods=['POST'])
def authenticate_signup():
    signup_data = request.get_json()
    email_created = signup_data.get('email')
    password_created = signup_data.get('password')
    username_created = signup_data.get('username')

    # Check if the entered email matches any user in the list
    for user in users:
        if user['email'] == email_created:
            return jsonify({"signupAuthenticated": False, "message": "Email already exists. Please choose a different email."})

    # If the email doesn't match any user in the list, append the new user details to the users list
    users.append({
        "email": email_created,
        "password": password_created,
        "username": username_created
    })
    return jsonify({"signupAuthenticated": True, "message": "Signup successful"})

if __name__ == '__main__':
    app.run(debug=True)

