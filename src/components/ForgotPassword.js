import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../apiConfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // Input for email
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
        email, // Send the email to request an OTP
      });
      alert(response.data.message); // Show success message
      navigate("/reset-password", { state: { email } }); // Pass email to ResetPassword page
    } catch (error) {
      console.error("Failed to send OTP:", error.response?.data || error.message);
      alert("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Bind email input
      />
      <button onClick={handleSendOTP}>Send OTP</button>
    </div>
  );
};

export default ForgotPassword;
