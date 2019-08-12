import React from "react"
import "./style.css"

const List = props =>(
    <div className="productList">
        <ul>
           {props.children} 
        </ul>
    </div>

)
export default List;