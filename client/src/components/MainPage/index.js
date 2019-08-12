import React, {Component} from 'react'
import "./style.css"
import Jumbotron from "../Jumbotron";
import SearchBar from "../SearchBar";
import List from '../List/List';
import {Card} from '../List/Card';
import API from '../../utils/API';




class MainPage extends Component {

    state = {
		q: "",
		products: []
	}

	handleInputChange = event => {
		const {name, value } = event.target;
		this.setState({
		  q: value
		});
	  };
	  handleFormSubmit = event => {
		event.preventDefault();
		 if (event.key === 'Enter') {
		  console.log('enter key pressed')
		}
	  };

	handleFormSubmit = () => {
		console.log('Yes')
		API.getProduct(this.state.q)
		  .then(res => {
			this.setState({ products: res.data})
			console.log("from DB:", res.data[0].product_name)
			// console.log("from DB:", res.data[0].product_name)
			console.log("state",this.state.products)
		  }
		  )
		  .catch(err => console.log(err));
	  };
	  
	render() {
    return (
        <div>
         <Jumbotron></Jumbotron>   
         <SearchBar 
			  handleInputChange = {this.handleInputChange}
			  handleFormSubmit = {this.handleFormSubmit}
			  onKeyPress={this.handleKeyPress}
			  q = {this.state.q} 
			  formResults = {this.loadProducts}/>
			  <div>
					{this.state.products.map(product => (
						<Card
						id={product._id}
						key={product._id}
						name={product.product_name}
						price={product.product_price}
						image={product.product_image}
						
						/>  
						
					))}
			</div> 
        </div>
      
      
   
    );
  }
}
  
  export default MainPage;