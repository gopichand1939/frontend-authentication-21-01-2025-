import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../apiConfig";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState(""); // Email input field
  const [otp, setOtp] = useState(""); // OTP input field
  const [newPassword, setNewPassword] = useState(""); // New password input field
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reset-password`, {
        email,        // Email entered by the user
        otp,          // OTP entered by the user
        newPassword,  // New password entered by the user
      });
      alert(response.data.message); // Show success message
      navigate("/login"); // Navigate to login page after successful password reset
    } catch (error) {
      console.error("Reset password failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Reset failed. Please check your OTP.");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Allow user to edit the email field
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)} // Bind OTP input
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Create new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} // Bind new password input
        />
      </div>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
