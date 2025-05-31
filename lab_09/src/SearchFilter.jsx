import React, { useState } from "react";
import jsonData from "./data.json";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = jsonData.filter((item) =>
      item.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <h2>Filter Search</h2>
      <input
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default SearchFilter;
