import React from "react";

function SearchForm({ keyword, keywordChange }) {
  return (
    <form className="search-form">
      <input
        type="text"
        className="input search-input"
        placeholder="Search for a list, category, or username."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </form>
  );
}

export default SearchForm;
