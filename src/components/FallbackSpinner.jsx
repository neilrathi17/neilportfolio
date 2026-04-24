import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

const styles = {
  spinnerContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

function FallbackSpinner() {
  const theme = useContext(ThemeContext);
  
  return (
    <div style={styles.spinnerContainerStyle}>
      <Spinner 
        animation="grow" 
        style={{ color: theme.accentColor }}
      />
    </div>
  );
}

export default FallbackSpinner;
