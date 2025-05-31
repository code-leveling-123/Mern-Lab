import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const url = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/fruits`, { name, price });
      console.log("Data sent successfully");
    } catch (error) {
      console.log("Error sending dara: ", error);
    }
  };
  return (
    <>
      <h1>Fruit Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Fruit name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Enter price:</label>
        <br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
