import React, { useState } from "react";
import "./App.css";

function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state

  const handleSignUp = () => {
    // Set loading state to true when the sign-up process starts
    setIsLoading(true);

    // Simulate sign-up process (replace with actual sign-up logic)
    setTimeout(() => {
      // After some time, simulate successful sign-up
      console.log("Sign up successful!");
      setIsLoading(false); // Set loading state to false when sign-up is complete
    }, 2000);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Conditionally render loader based on isLoading state */}
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <button onClick={handleSignUp}>Sign Up</button>
        )}
      </div>
    </div>
  );
}

export default signup;
