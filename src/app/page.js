// app/page.jsx
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default function Home() {
  return (
    <main style={{ display: "flex", gap: "50px", padding: "40px" }}>
      <Signup />
      <Login />
    </main>
  );
}
