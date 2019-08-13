import React from "react";
import "./style.css"

function Form({ q, handleInputChange, handleShopIt, props }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
        </label>
        <input
          className="form-control"
          id="Price"
          type="text"
          value={q}
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
          className="btn btn-lg btn-danger"
        >
          ShopIt
        </button>
      </div>
    </form>
  );
}

export default Form;
