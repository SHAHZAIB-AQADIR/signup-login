// app/components/Login.jsx
"use client";

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (user) {
      const stored = JSON.parse(user);
      if (stored.email === email && stored.password === password) {
        setMessage("Login successful!");
      } else {
        setMessage("Invalid credentials");
      }
    } else {
      setMessage("No user found, please signup first");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2">
      <h2>Login</h2>

      <input
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

      <button type="submit" className="bg-green-500 text-black px-4 py-2">
        Login
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
