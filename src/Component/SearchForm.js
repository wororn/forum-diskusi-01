import React from "react";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="input search-input"
        placeholder="Search for a thread, category, or username."
      />
    </form>
  );
}

export default SearchForm;
        
