import React, { Component } from 'react';
import screen from '../assets/screen.svg';
import "../styles/Event.css";


class Event extends Component {

    render() {
        return (

        <div id='main'>
            <div id='screen'>
                <iframe width="493" height="277"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>

            <div id='event_chat'>
                <textarea id="chat-log" cols="100" rows="20"></textarea><br/>
                <input id="chat-message-input" type="text" size="100" /><br/>
                <input id="chat-message-submit" type="button" value="Send" />
            </div>

      </div>

        );
    }
}

export default Event;
