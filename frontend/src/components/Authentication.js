import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import '../styles/Authentication.sass';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Authentication extends React.Component {

  state = {
    username: '',
    password: '',
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };


  componentDidMount() {

    'use strict';

    var usernameError = true,
        emailError    = true,
        passwordError = true,
        passConfirm   = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .pass, .passConfirm').blur();
        } else {
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    //$('a.profile').on('click', function () {
       // location.reload(true);
   // });


};

  render() {

    return (
        <div class="container">
           <section id="formHolder">

              <div class="row">


                 <div class="col-sm-6 brand">
                    <a href="/" class="logo">LC <span>.</span></a>

                    <div class="heading">
                       <h2>Let's Connect</h2>
                       <p>a new way to learn</p>
                    </div>

                    <div class="success-msg">
                       <p>Great! You are one of our members now</p>
                       <a href="/profile" class="profile">Your Profile</a>
                    </div>
                 </div>



                 <div class="col-sm-6 form">


                    <div class="login form-peice switched">
                       <form class="login-form" onSubmit={e => this.props.handle_login(e, this.state)} method="post">
                          <div class="form-group">
                             <label for="loginemail">Email Adderss</label>
                             <input type="email" name="username" id="loginemail" value={this.state.username} onChange={this.handle_change} required/>
                          </div>

                          <div class="form-group">
                             <label for="loginPassword">Password</label>
                             <input type="password" name="password" id="loginPassword" value={this.state.password} onChange={this.handle_change} required/>
                          </div>

                          <div class="CTA">
                             <input type="submit"/>
                             <a href="#" class="switch">I'm New</a>
                          </div>
                       </form>
                    </div>




                    <div class="signup form-peice">
                       <form class="signup-form" onSubmit={e => this.props.handle_signup(e, this.state)} method="post">

                          <div class="form-group">
                             <label for="name">Full Name</label>
                             <input type="text" name="username" id="name" value={this.state.username} onChange={this.handle_change} class="name"/>
                             <span class="error"></span>
                          </div>

                          <div class="form-group">
                             <label for="email">Email Adderss</label>
                             <input type="email" name="emailAdress" id="email" value={this.state.emailAdress} onChange={this.handle_change} class="email"/>
                             <span class="error"></span>
                          </div>

                          <div class="form-group">
                             <label for="phone">Phone Number - <small>Optional</small></label>
                             <input type="text" name="phone" id="phone"/>
                          </div>

                          <div class="form-group">
                             <label for="password">Password</label>
                             <input type="password" name="password" id="password" value={this.state.password} onChange={this.handle_change} class="pass"/>
                             <span class="error"></span>
                          </div>

                          <div class="form-group">
                             <label for="passwordCon">Confirm Password</label>
                             <input type="password" name="passwordCon" id="passwordCon" class="passConfirm"/>
                             <span class="error"></span>
                          </div>

                          <div class="CTA">
                             <input type="submit" value="Signup Now" id="submit"/>
                             <a href="#" class="switch">I have an account</a>
                          </div>
                       </form>
                    </div>

                 </div>
              </div>
           </section>
        </div>
    );
  }
}

export default Authentication;
 /*
Authentication.propTypes = {
  handle_login: PropTypes.func.isRequired
};
*/