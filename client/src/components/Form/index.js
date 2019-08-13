import React from "react";
import "./style.css"
import { PromiseProvider } from "mongoose";

function Form({ q, handleInputChange, handleShopIt, props, formValue }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
        </label>
        <input
          className="form-control"
          id="Price"
          type="text"
          value={formValue}
          placeholder="Name Your Price"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleShopIt}
          type="submit"
          className="btn btn-lg btn-danger shop"
        >
          ShopIt
        </button>
      </div>
    </form>
  );
}

export default Form;
