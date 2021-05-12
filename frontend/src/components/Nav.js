import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Nav.css';

function Nav(props) {
  const logged_out_nav = (
    <a href='/login'>lets get started</a>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return (
    <div id='wrap'>
        <div id='logo'>LOGO</div>
        <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
    </div>
  );
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};