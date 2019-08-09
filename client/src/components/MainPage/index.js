import React, {Component} from 'react'
import "./style.css"
import Jumbotron from "../Jumbotron";
import SearchBar from "../SearchBar";
import List from '../List/List';
import Card from '../List/Card';




class MainPage extends Component {
    state = {
		q: ""
	}
	handleInputChange = event => {
		const { name, value } = event.target;
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
	  
	render() {
    return (
        <div>
         <Jumbotron></Jumbotron>   
         <SearchBar 
			  handleInputChange = {this.handleInputChange}
			  handleFormSubmit = {this.handleFormSubmit}
			  onKeyPress={this.handleKeyPress}
			  q = {this.state.q} />
        <Card/>
        </div>
      
      
   
    );
  }
}
  
  export default MainPage;