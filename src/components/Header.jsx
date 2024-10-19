import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Header(props) {
  const { title } = props;
  return <h5 style={{margintop:'1px', padding:'10px'}} className="header">{title}</h5>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
