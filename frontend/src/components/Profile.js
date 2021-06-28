import React, { Component } from 'react';
import profile from '../assets/profile.svg';
import logOut from '../assets/log-out.svg';
import learn from '../assets/learn.svg';
import chat from '../assets/chat.svg';
import showTheBug from '../assets/showTheBug.svg';
import "../styles/Profile.css";
import ReactCircleModal from 'react-circle-modal';
import axios from "axios";


class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
        RequestedEventTitle: '',
        RequestedEventDescription: '',
        RequestedEventDate: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
    const evetRequest = {
      RequestedEventTitle: this.state.RequestedEventTitle,
      RequestedEventDescription: this.state.RequestedEventDescription,
      RequestedEventDate: this.state.RequestedEventDate,
    }

    axios.post("http://localhost:8000/api/form/",
    {
      RequestedEventTitle: this.state.RequestedEventTitle,
      RequestedEventDescription: this.state.RequestedEventDescription,
      RequestedEventDate: this.state.RequestedEventDate,
    },
    {
        headers: {
                  Authorization: `JWT ${localStorage.getItem('token')}`
                }
    }

      )
      .then(res=>{
        console.log(res);
        console.log(res.data);
    })
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

                <ReactCircleModal backgroundColor="rgba(23,68,119, 0.9)" toogleComponent={onClick => ( <a href="#" onClick={onClick} >Earn points</a> )} offsetX={0} offsetY={0} >
                    {(onClick) => (
                        <div style={{ backgroundColor: 'rgba(0,0,0,0)', padding: '90px', margin: 'auto', width: '50%' }}>
                            <button type="button" className="btn btn-danger exit" onClick={onClick}>X</button>
                            <h3 id='pop-head'>Book your event to earn extra points</h3>
                            <form id='popup-form' onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="RequestedEventTitle">title:</label>
                                    <input type="text" className="form-control" id="RequestedEventTitle" name="RequestedEventTitle" value={this.state.RequestedEventTitle} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="RequestedEventDescription">Description:</label>
                                    <input type="text" className="form-control" id="RequestedEventDescription" name="RequestedEventDescription" value={this.state.RequestedEventDescription} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="RequestedEventDate">Date:</label>
                                    <input type="date" className="form-control" id="RequestedEventDate" name="RequestedEventDate" value={this.state.RequestedEventDate} onChange={this.handleChange} />
                                </div>

                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    )}
                </ReactCircleModal>
                <h3>{this.props.title}</h3>
                <label htmlFor="points">Points : &nbsp; &nbsp; &nbsp;</label>
                <progress id="points" value={this.props.points} max="100" />

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
