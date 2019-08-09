import React from "react";
import "./style.css"

const Card = props => (
   <div>
   <li>
    <div className="card mt-4">
    <img className="cardImage" src={props.children.product_image}></img>
      <div className="card-body">
      <h5 className= "card-title">{props.children.product_name}</h5>
      <p className= "card-text">{props.children.product_price}</p>
      </div>
    </div>
    </li>
    </div>
  );


export default Card;
