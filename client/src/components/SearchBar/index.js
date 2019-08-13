import React from "react";
import "./style.css"

function SearchBar({ q, handleInputChange, handleFormSubmit, props }) {
  return (
    <div className="searchWrapper">

      <form>
        <div className="input-field">
          <input
            id="search"
            type="search"
            value={q}
            placeholder="SHOES"
            name={q}
            onChange={handleInputChange}
            required
          />
          <label className="label-icon" for="search"></label>
        </div>
      </form>
      <div className="btn btn-primary btn-lg submit" onClick={handleFormSubmit} href="/login" role="button">Search!</div>
    </div>

  );
}

export default SearchBar;
