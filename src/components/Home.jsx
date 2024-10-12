
import React, { useState, useEffect } from 'react';
import {Fade, Slide} from 'react-awesome-reveal';
import ReactMarkdown from 'react-markdown';
import { Container, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import endpoints from '../constants/endpoints';
// import Header from './Header';

const styles = {
  portfolioContainer: {
    display: 'flex',
    height: '100vh', // Make sure it takes the full height of the viewport
  },
  homeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '.5px 0 0 #000',
    borderRight: '1px solid #3D84C6'
  },
  aboutContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: '3.5em',
    marginBottom: '30px',
  },
  imgStyle: {
    borderRadius: '5px',
  },
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function Portfolio() {
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
    <div style={styles.portfolioContainer}>
      {/* Home Section */}
      <div style={styles.homeContainer}>
        {homeData ? (
          < >
            <h5 style={styles.nameStyle}>{homeData?.name}</h5>
            <img width={220} height={220} style={styles.imgStyle} src={aboutData?.imageSource} alt="profile" />
            <Social />
          </>
        ) : <FallbackSpinner />}
      </div>

      {/* About Section */}
      <div style={styles.aboutContainer}>
        {aboutData ? (
          <Slide direction='down'>
            <Container>
              <Row>
                {parseIntro(aboutData.about)}
              </Row>
            </Container>
          </Slide>
        ) : <FallbackSpinner />}
      </div>
    </div>
  );
}

export default Portfolio;
