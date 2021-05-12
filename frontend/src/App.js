import React, { Component } from 'react';
import Landing from "./components/Landing.js";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav.js';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Authentication from './components/Authentication';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          displayed_form: '',
          logged_in: localStorage.getItem('token') ? true : false,
          loginemail: ''
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
          fetch('http://localhost:8000/core/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ username: json.username });
            });
        }
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              loginemail: json.user.emailAddress
            });
          });
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/core/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              displayed_form: '',
              username: json.username
            });
          });
    };

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
    };



    render() {
        return (

        <Router>

            <div>

               {/*
                <Nav logged_in={this.state.logged_in} handle_logout={this.handle_logout} />
                <h3>
                    {this.state.logged_in ? `Hello, ${this.state.username}` : 'Please Log In'}
                </h3>
                */}
                <Switch>
                    <Route exact path='/Login' component = {()=> <Authentication handle_signup={this.handle_signup} />} />
                    <Route exact path='/' component = {()=> <Landing />} />
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
