import React from "react"
import "./style.css"
import {Link} from "react-router-dom"


let newid = ""

function Card(props) {
    let passid = (id) => {
        return newid=id
    }

  return (
    <Link to="/itemdetail">
    <div className="card" onClick={()=>passid(props.id)}>
        <div className="img-container">
        <img className="cardImage" src={props.image} alt="cardImg"></img>
        </div>
        <div className="content">
            <h5 className= "card-title">{props.name}</h5>
            <p className= "card-text">${props.price}</p>
        </div>
    </div>
    </Link>
  )
  }


export {Card, newid};
