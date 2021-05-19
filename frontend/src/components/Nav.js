import React from 'react';
import '../styles/Nav.css';

function Nav(props) {
  const logged_out_nav = (
    <a href='/login'>lets get started</a>
  );

  const logged_in_nav = (
    <a onClick={props.handle_logout}>logout</a>

  );
  return (
    <div id='wrap'>
        <div id='logo'><a href='/'>Home</a></div>
        <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
    </div>
  );
}

export default Nav;
