import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../apiConfig"; // Ensure this file exists and contains the API base URL
import { useNavigate } from "react-router-dom";
import "./Login.css";  // Ensure CSS is correctly imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login submission
const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
      console.log("Login Response:", response.data);  // Log the response for debugging
      alert("Login successful!");  // Show success message
      
      // Navigate to the external site after successful login
      window.location.href = "https://137137.ccbp.tech/";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <div className="links">
          <p>Don't have an account? <span onClick={() => navigate("/register")}>Register</span></p>
          <p>Forgot Password? <span onClick={() => navigate("/forgot-password")}>Click here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
