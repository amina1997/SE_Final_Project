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

           {/*<object><param name="movie" value="http://www.youtube.com/v/v1gTI4BOPUw?version=3" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><embed src="http://www.youtube.com/v/v1gTI4BOPUw?version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="390" /></object>
*/}         </div>

        );
    }
}

export default Event;
