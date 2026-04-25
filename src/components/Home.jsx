
import React, { useState, useEffect, useContext } from 'react';
import {Fade, Slide} from 'react-awesome-reveal';
import ReactMarkdown from 'react-markdown';
import { Container, Row } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
// import PropTypes from 'prop-types';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import endpoints from '../constants/endpoints';
// import Header from './Header';

const styles = {
  portfolioContainer: {
    display: 'flex',
    minHeight: 'calc(100vh - 8vh)',
  },
  homeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '2px solid',
  },
  aboutContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: "20px"
  },
  nameStyle: {
    fontSize: '3.5em',
    marginBottom: '30px',
    fontWeight: 700,
  },
  imgStyle: {
    borderRadius: '5px',
    border: '3px solid',
  },
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
    lineHeight: 1.8,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function Portfolio() {
  const theme = useContext(ThemeContext);
  const [homeData, setHomeData] = useState(null);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch home data
    fetch(endpoints.home, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setHomeData(res))
      .catch((err) => console.error(err));

    // Fetch about data
    fetch(endpoints.about, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setAboutData(res))
      .catch((err) => console.error(err));
  }, []);

  const parseIntro = (text) => (
    <ReactMarkdown children={text} />
  );

  return (
    <div style={styles.portfolioContainer} className="portfolio-container">
      {/* Home Section */}
      <div style={{
        ...styles.homeContainer,
        backgroundColor: theme.background,
        borderRightColor: theme.accentColor,
      }} className="home-section">
        {homeData ? (
          < >
            <h5 style={{
              ...styles.nameStyle,
              color: theme.color,
            }} className="name-style">{homeData?.name}</h5>
            <img 
              width={220} 
              height={220} 
              style={{
                ...styles.imgStyle,
                borderColor: theme.accentColor,
              }} 
              src={aboutData?.imageSource} 
              alt="profile" 
              className="profile-image"
            />
            <Social />
          </>
        ) : <FallbackSpinner />}
      </div>

      {/* About Section */}
      <div style={{
        ...styles.aboutContainer,
        backgroundColor: 'transparent',
      }} className="about-section">
        {aboutData ? (
          <Fade triggerOnce direction="down" duration={800} fraction={0.2}>
            <Container>
              <Row style={{ color: theme.color }}>
                {parseIntro(aboutData.about)}
              </Row>
            </Container>
          </Fade>
        ) : <FallbackSpinner />}
      </div>
    </div>
  );
}

export default Portfolio;
