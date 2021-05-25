import React, { Component } from 'react';
import screen from '../assets/screen.svg';
import "../styles/ShowTheBug.css";


class ShowTheBug extends Component {

    render() {
        return (

        <div id='main'>
            <div id='screen'>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
        </div>

        );
    }
}

export default ShowTheBug;
