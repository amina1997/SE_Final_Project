import React, { Component } from 'react';
import Landing from "./components/Landing.js";
import Profile from "./components/Profile.js";
import ShowTheBug from "./components/ShowTheBug.js";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav.js';
import Authentication from './components/Authentication';
import Event from './components/Event';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          logged_in: localStorage.getItem('token') ? true : false,
          username: '',
          email: '',
          title: '',
          points: '',
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
            .then(
                (json) => {
                  this.setState({
                    username: json.username,
                    email: json.email,
                    title: json.profile.title,
                    points: json.profile.points
                  });
                },
                (error) => {

                }
            );
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
          .then((json) => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              username: json.user.username,
              email: json.user.email,
              title: json.user.profile.title,
              points: json.user.profile.points

            });
          },

          (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
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
              username: json.username,
              title: json.profile.title,
              points: json.profile.points
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
                    <Route exact path='/Login' component = { this.state.logged_in ? () => <Profile name={this.state.username} email={this.state.email} title={this.state.title} points={this.state.points} /> : () => <Authentication handle_signup={this.handle_signup} handle_login={this.handle_login} /> } />
                    <Route exact path='/' component = {()=> <Landing />} />
                    <Route exact path='/ShowTheBug' component = { ()=> <ShowTheBug />  } />
                    <Route exact path='/event' component = {()=> <Event />} />
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
