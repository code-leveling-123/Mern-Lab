import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function DataCollector() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  return (
    <>
      <h2>Data Collection</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
export default DataCollector;
