// app/components/Signup.jsx
"use client";

import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const temp = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPass = /^(?=.*\d)(?=.*[A-Za-z]).{6,}$/;

    if (!formData.fullName) temp.fullName = "Required";
    if (!emailRegex.test(formData.email)) temp.email = "Invalid email";
    if (!strongPass.test(formData.password))
      temp.password = "6+ chars & numbers";
    if (formData.password !== formData.confirmPassword)
      temp.confirmPassword = "Passwords must match";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      setMessage("Signup successful!");
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2>Signup</h2>
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <p className="text-red-500">{errors.fullName}</p>

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="text-red-500">{errors.email}</p>

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <p className="text-red-500">{errors.password}</p>

      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <p className="text-red-500">{errors.confirmPassword}</p>

      <button type="submit" className="bg-blue-500 text-black px-4 py-2">
        Signup
      </button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
};

export default Signup;
