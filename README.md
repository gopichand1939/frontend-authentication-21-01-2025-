

MONGO_URI=mongodb+srv://imageauth137:Bseap%401939@image-auth-cluster.o0qzj.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=SecureJWTKeyForProject!2025
EMAIL_USER=tummapalagopichand@gmail.com
EMAIL_PASS=bapyixcidvdoyrjg




Register Endpoint:
https://authentication-app-backend-code.onrender.com/api/auth/register

Login Endpoint:
https://authentication-app-backend-code.onrender.com/api/auth/login

Forgot Password Endpoint:
https://authentication-app-backend-code.onrender.com/api/auth/forgot-password

Reset Password Endpoint:
https://authentication-app-backend-code.onrender.com/api/auth/reset-password



Register Endpoint
Request Method: POST

URL:

https://authentication-app-backend-code.onrender.com/api/auth/register

JSON Body:

{ "name": "Gopi", "email": "tummapalagopichand@gmail.com", "password": "1234" }

Expected Response:

Success:

{ "message": "User registered successfully" }

Failure (User already exists):

{ "message": "User already exists"

}

Login Endpoint
Request Method: POST

URL: https://authentication-app-backend-code.onrender.com/api/auth/login

JSON Body:

{ "email": "tummapalagopichand@gmail.com", "password": "1234" }

Expected Response:

Success:

{ "message": "Login successful", "token": "your_jwt_token_here" }

Failure (Invalid credentials):

{ "message": "Invalid credentials" }

Forgot Password Endpoint
Request Method: POST

URL:

https://authentication-app-backend-code.onrender.com/api/auth/forgot-password

JSON Body:

{ "email": "tummapalagopichand@gmail.com" }

Expected Response:

Success:

{ "message": "OTP sent successfully" } Failure (User not found):

{ "message": "User not found" }

Reset Password Endpoint
Request Method: POST

URL:

https://authentication-app-backend-code.onrender.com/api/auth/reset-password

JSON Body:

{ "email": "tummapalagopichand@gmail.com", "otp": "473138", // Replace with the OTP received "newPassword": "newPassword123" }

Expected Response: Success:

{ "message": "Password reset successfully" } Failure (Invalid or expired OTP): json Copy { "message": "Invalid or expired OTP" }
