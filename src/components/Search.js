import React from "react";

function Search({onSearch}) {
  // const handleSearch = (s) => {
  //   onSearch(s.target.value)
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value || "")}
        />
      console.log("Searching...")

    </div>
  );
}

export default Search;
