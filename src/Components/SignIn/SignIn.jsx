import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false); // State to track username input error
  const [passwordError, setPasswordError] = useState(false); // State to track password input error
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Check if username or password is empty
    if (username.trim() === "" || password.trim() === "") {
      // Set error state for both fields
      setUsernameError(username.trim() === "");
      setPasswordError(password.trim() === "");
    } else {
      // Both fields are filled, proceed with sign-in
      onSignIn(username);
      navigate("/");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setUsernameError(false); // Reset error when user starts typing
        }}
        placeholder={
          usernameError ? "Username is required!" : "Enter your username"
        }
        className={usernameError ? "error" : ""}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError(false); // Reset error when user starts typing
        }}
        placeholder={
          passwordError ? "Password is required!" : "Enter your Password"
        }
        className={passwordError ? "error" : ""}
      />

      <button onClick={handleSignIn} disabled={usernameError || passwordError}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
