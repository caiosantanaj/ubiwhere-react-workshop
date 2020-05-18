import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className='navbar welcome-text'>
      <Link to='/'>{props.title}</Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Ubiwhere's React workshop",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
