import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import '../App.css';

function Header(props) {
  const { title } = props;
  const theme = useContext(ThemeContext);
  return (
    <h5 
      style={{
        marginTop: '1px', 
        padding: '15px',
        color: theme.color,
        borderBottom: `2px solid ${theme.accentColor}`,
        display: 'inline-block',
        width: '100%',
      }} 
      className="header"
    >
      {title}
    </h5>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
