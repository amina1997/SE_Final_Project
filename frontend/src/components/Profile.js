import React, { Component } from 'react';
import profile from '../assets/profile.svg';
import logOut from '../assets/log-out.svg';
import learn from '../assets/learn.svg';
import chat from '../assets/chat.svg';
import showTheBug from '../assets/showTheBug.svg';
import "../styles/Profile.css";


class Profile extends Component {

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
        window.location.reload();
    };

    render() {
        return (

        <div id='main'>

            <div id="clouds">
	            <div class="cloud x1"></div>
	            <div class="cloud x2"></div>
	            <div class="cloud x3"></div>
	            <div class="cloud x4"></div>
	            <div class="cloud x5"></div>
            </div>

            <div id='personal_info' >
                <img className='profile' src={profile} alt="profile..." />
                <a href="#" onClick={this.handle_logout}><img id='log_out' src={logOut} alt="log-out" /></a>
                <p >{this.props.name}</p>
                <hr class="solid" />
                <p>********Title********</p>
                <p>********Points*******</p>
                <p>*********************</p>


            </div>

            <div id='content' >
                <div id='greeting' ><h1>Lets get started</h1></div>
                <div>
                    <a href='#' ><div className='options' id='show_the_bug' ><img className='pic' src={showTheBug} alt="profile..." /><p>Show The Bug</p></div></a>
                    <a href='#' ><div className='options' id='chat' ><img className='pic' src={chat} alt="profile..." /><p>chat & chat</p></div></a>
                    <a href='https://letshack.net/' ><div className='options' id='learn' ><img className='pic' src={learn} alt="profile..." /><p>lets learn</p></div></a>
                </div>
            </div>
        </div>

        );
    }
}

export default Profile;
