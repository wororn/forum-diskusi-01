import React from "react";
import PropTypes from "prop-types";

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
SearchForm.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchForm;
