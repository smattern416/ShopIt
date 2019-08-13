import React from 'react';
import RegisterForm from "../RegisterForm";
import {Redirect} from "react-router-dom";
import "./style.css"

//The component for doing the actual signup of the User
class Register extends React.Component {
	state = {
		redirectToReferrer: false
	}

	register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
				this.setState({redirectToReferrer: true})
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {

		const { from } = this.props.location.state || { from: { pathname: '/' } }
		const { redirectToReferrer } = this.state
		
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		} else {
		return (
			
			<div>
				<h4>Register a New User</h4>
				<RegisterForm onRegister={this.register} />
			</div>
		)
		}
	}
}

export default Register