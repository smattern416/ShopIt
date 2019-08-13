import React, {Component} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Jumbotron from "./components/Jumbotron";
import Detail from "./components/Detail";
import Login from "./components/Login";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import Register from "./components/Register";
import {Container} from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import './App.css';
import MainPage from './components/MainPage';
import API from './utils/API';
import Form from './components/Form';

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle:'none'
  };
//Now we have all the stuff we need .. let's render some components with the Router
class AuthExample extends Component {
	// state = {
	// 	q: ""
	// }
	// handleInputChange = event => {
	// 	const { name, value } = event.target;
	// 	this.setState({
	// 	  q: value
	// 	});
	//   };
	//   handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	 if (event.key === 'Enter') {
	// 	  console.log('enter key pressed')
	// 	}
	//   };


	  
	render() {
		return (
	<Router>
		<div>
			<Container>
				{/* <AuthButton/> */}
				{/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}
				<Switch>
					{/* <Route path="/public" component={PublicRoute}/> */}
					<Route exact path="/login" component={Login}/>
					<Route exact path="/itemdetail" component={Detail}/>
					<Route exact path="/register" component={Register}/>
					<PrivateRoute exact path="/protected" component={ProtectedRoute}/>
					<Route exact path = "/" component={MainPage}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
		);	
	}
}


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p>Success! You are Logged In!</p>
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
		<p>You are not logged in.</p>
	)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default AuthExample

