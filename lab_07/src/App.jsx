import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [registerData, setregisterData] = useState({ email: "", password: "" });
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const [message, setmessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", registerData);
      setmessage("User registered successfully");
    } catch (error) {
      setmessage("Error registering user");
      console.error("Error registering user: ", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/login", loginData);
      setmessage("Login successfully");
    } catch (error) {
      setmessage("Invalid credentials");
      console.error("Error logging in user: ", error);
    }
  };

  return (
    <>
      <h2>User Registration</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={registerData.email}
          onChange={(e) =>
            setregisterData({ ...registerData, email: e.target.value })
          }
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={registerData.password}
          onChange={(e) =>
            setregisterData({ ...registerData, password: e.target.value })
          }
          required
        />
        <br />
        <button type="submit">Register</button>
        <br />
      </form>

      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={loginData.email}
          onChange={(e) =>
            setloginData({ ...loginData, email: e.target.value })
          }
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setloginData({ ...loginData, password: e.target.value })
          }
          required
        />
        <br />
        <button type="submit">Login</button>
        <br />
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
