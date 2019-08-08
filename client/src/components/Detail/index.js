import React, {Component} from 'react'
import "./style.css"
import Jumbotron from "../Jumbotron";


function Detail({ q, handleInputChange, handleFormSubmit }) {
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
      
    </div>
    );
  }
  
  export default Detail;