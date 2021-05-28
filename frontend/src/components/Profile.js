import React, { Component } from 'react';
import profile from '../assets/profile.svg';
import logOut from '../assets/log-out.svg';
import learn from '../assets/learn.svg';
import chat from '../assets/chat.svg';
import showTheBug from '../assets/showTheBug.svg';
import "../styles/Profile.css";
import ReactCircleModal from 'react-circle-modal'


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
        window.location.reload();
    };

    render() {
        return (

        <div id='main'>

            <div id="clouds">
	            <div className="cloud x1"></div>
	            <div className="cloud x2"></div>
	            <div className="cloud x3"></div>
	            <div className="cloud x4"></div>
	            <div className="cloud x5"></div>
            </div>

            <div id='personal_info' >
                <img className='profile' src={profile} alt="profile..." />
                <a href="#" onClick={this.handle_logout}><img id='log_out' src={logOut} alt="log-out" /></a>
                <p>{this.props.name}</p>
                <hr className="solid" />

                {/*The Popup*/}

                <ReactCircleModal backgroundColor="rgba(23,68,119, 0.8)" toogleComponent={onClick => ( <a href="#" onClick={onClick} >Earn points</a> )} offsetX={0} offsetY={0} >
                    {(onClick) => (
                        <div style={{ backgroundColor: 'rgba(0,0,0, 0)', padding: '90px', margin: 'auto', width: '50%' }}>
                            <button type="button" className="btn btn-danger exit" onClick={onClick}>X</button>
                            <h3 id='pop-head'>Book your event to earn extra points</h3>
                            <form id='popup-form'onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">title:</label>
                                    <input type="text" className="form-control" id="title" value={this.state.value} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title">Description:</label>
                                    <input type="text" className="form-control" id="Description" value={this.state.value} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title">Date:</label>
                                    <input type="date" className="form-control" id="Date" value={this.state.value} onChange={this.handleChange} />
                                </div>

                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    )}
                </ReactCircleModal>
                <p>{this.props.name}</p>
                <p>********Points*******</p>
            </div>

            <div id='content' >
                <div id='greeting' ><h1>Lets get started</h1></div>
                <div>
                    <a href='http://localhost:3000/ShowTheBug' ><div className='options' id='show_the_bug' ><img className='pic' src={showTheBug} alt="profile..." /><p>Show The Bug</p></div></a>
                    <a href='http://127.0.0.1:8000/chat/' ><div className='options' id='chat' ><img className='pic' src={chat} alt="profile..." /><p>chat & chat</p></div></a>
                    <a href='https://letshack.net/' ><div className='options' id='learn' ><img className='pic' src={learn} alt="profile..." /><p>lets learn</p></div></a>
                </div>
            </div>
        </div>

        );
    }
}

export default Profile;
