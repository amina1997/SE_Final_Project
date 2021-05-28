import React, { Component } from 'react';
import "../styles/ShowTheBug.css";
import axios from "axios";
import showTheBug from '../assets/showTheBug.svg';
import StbAnime from '../components/STB_Anime';

class ShowTheBug extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    axios
      .get("/api/events/")
      .then((res) => this.setState({ eventList: res.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {

    return this.state.eventList.map((item) => (

        <a href='/event'><div className='event'>
            <img className='pic' src='{item.photo}' alt="profile..." />
            {item.photo.name}
            <h4>{item.title}</h4>
            <p>{item.speaker}</p>
            <h4>{item.date}</h4>
        </div></a>

    ));
  }



    render() {
        return (

        <div id='main_page'>
            <div id="clouds">
	            <div className="cloud x1"></div>
	            <div className="cloud x2"></div>
	            <div className="cloud x3"></div>
	            <div className="cloud x4"></div>
	            <div className="cloud x5"></div>
            </div>
            <StbAnime />

            <div id='events'>
                {this.renderItems()}

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>

                <div className='event'>
                    <img className='pic' src={showTheBug} alt="profile..." />
                    <h2>title</h2>
                    <p>speaker</p>
                    <h4>description</h4>
                </div>



            </div>

        </div>

        );
    }
}

export default ShowTheBug;
