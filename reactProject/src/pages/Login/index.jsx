import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './_Login.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

   
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input 
          type="email" 
          id="login-email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />

        <label htmlFor="login-password">Password</label>
        <input 
          type="password" 
          id="login-password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
          required 
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
