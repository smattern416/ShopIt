import React from 'react'
import "./style.css"
import Jumbotron from "../Jumbotron"
import { newid } from "../List/Card"
import API from "../../utils/API"
import Form from "../Form"

/* <div>
<button type="button" class="btn btn-primary btn-lg">Back to Results</button>
</div> */
class Detail extends React.Component {

  state = {
    item: ""
  }

  componentDidMount() {
    console.log(newid)
    API.getItem(newid)
      .then(data => {
        console.log(data)
        this.setState({ item: data.data })
      })
      .catch(err => { console.log(err) })
  }

  render() {

    return (
      <div>
        <Jumbotron />
        <div>
          <a className="btn btn-primary btn-lg results" href="/" role="button">Back to Results</a>
        </div>
        <div className="row">
          <div className="col 6 image">
            <img src={this.state.item.product_image} alt="item picture" />
          </div>
          <div className="col 6 productInfo">
            <h2> {this.state.item.product_name}</h2>
            <p>Product Type: {this.state.item.product_type}</p>
            <p>Product Price: ${this.state.item.product_price}</p>
            <p>Product Color: {this.state.item.product_color}</p>
            <p>Product Sku: {this.state.item.product_sku}</p>
            <p>Product Description: {this.state.item.product_description}</p>
            <br></br>
            <div>
              <Form
                handleInputChange={this.handleInputChange}
                handleShopIt={this.handleShopIt}
                >

              </Form>
            </div>
          </div>
        </div>
      </div>


    )


  }
};

export default Detail;