import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">
      <h1>ShopIt</h1>
      <br></br>
      <br></br>
      <div className = "tagLine"> Set your price. We ShopIt for you.</div>
      <br></br>
      <a className="btn btn-primary btn-lg login" href="/login" role="button">Sign In</a>
      <a className="btn btn-primary btn-lg register" href="/register" role="button">Sign Up</a>
      
  </div>;
}

export default Jumbotron;
