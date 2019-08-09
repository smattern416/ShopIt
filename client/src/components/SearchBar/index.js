import React from "react";
import "./style.css"

function SearchBar({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="searchWrapper">
    
      <form>
        <div className="input-field">
          <input 
            id="search" 
            type="search" 
            value = {q}
            placeholder = "shoes"
            name = {q}
            onChange = {handleInputChange}
            required
          />
          <label className="label-icon" for="search"></label>
        </div>
      </form>
      <div className="btn btn-primary btn-lg submit" href="/login" role="button">Search!</div>
  </div>
  
  );
}

export default SearchBar;
