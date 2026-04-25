import React, { useEffect, useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  iconStyle: {
    height: 50,
    width: 50,
    margin: 8,
    marginBottom: 5,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
    marginBottom: 20,
  },
  skillItemStyle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,
  },
  skillIconStyle: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  skillTextStyle: {
    fontSize: '1.1em',
    fontWeight: 500,
  },
  certificationCardStyle: {
    padding: '15px 20px',
    marginBottom: 15,
    borderRadius: 8,
    borderLeft: '4px solid',
  },
  certificationTitleStyle: {
    fontSize: '1.1em',
    fontWeight: 600,
    marginBottom: 5,
  },
  certificationIssuerStyle: {
    fontSize: '0.9em',
    opacity: 0.8,
  },
  certificationDateStyle: {
    fontSize: '0.85em',
    opacity: 0.7,
    marginTop: 5,
  },
};

function Skills(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [skillsData, setSkillsData] = useState(null);
  const [certData, setCertData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setSkillsData(res))
      .catch((err) => err);

    fetch(endpoints.certifications, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setCertData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {skillsData ? (
        <div className="section-content-container">
          <Container fluid style={{ padding: '0 40px' }}>
            <Row style={{ minHeight: 'calc(100vh - 15vh)' }}>
              {/* Left Side - Skills */}
              <Col xs={12} md={6} style={{
                borderRight: `2px solid ${theme.accentColor}`,
                paddingRight: 30,
              }} className="skills-col">
                {renderSkillsIntro(skillsData.intro)}
                <Fade>
                  {skillsData.skills?.map((category) => (
                    <div key={category.title} style={{ marginBottom: 25 }}>
                      <h5 style={{ 
                        color: theme.accentColor, 
                        marginBottom: 15,
                        fontWeight: 600,
                      }}>
                        {category.title}
                      </h5>
                      {category.items.map((item) => (
                        <div key={item.title} style={styles.skillItemStyle}>
                          <img
                            style={styles.skillIconStyle}
                            src={item.icon}
                            alt={item.title}
                          />
                          <span style={{ 
                            ...styles.skillTextStyle, 
                            color: theme.color 
                          }}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </Fade>
              </Col>

              {/* Right Side - Certifications */}
              <Col xs={12} md={6} style={{ paddingLeft: 30 }} className="certifications-col">
                <h4 style={{ 
                  color: theme.accentColor, 
                  marginBottom: 25,
                  fontWeight: 600,
                  borderBottom: `2px solid ${theme.accentColor}`,
                  paddingBottom: 10,
                  display: 'inline-block',
                }}>
                  Certifications
                </h4>
                <Fade>
                  {certData?.certifications?.map((cert, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.certificationCardStyle,
                        backgroundColor: theme.cardBackground,
                        borderLeftColor: theme.accentColor,
                      }}
                    >
                      <div style={{ 
                        ...styles.certificationTitleStyle, 
                        color: theme.color 
                      }}>
                        {cert.title}
                      </div>
                      <div style={{ 
                        ...styles.certificationIssuerStyle, 
                        color: theme.color 
                      }}>
                        {cert.issuer}
                      </div>
                      <div style={{ 
                        ...styles.certificationDateStyle, 
                        color: theme.accentColor 
                      }}>
                        {cert.date}
                      </div>
                    </div>
                  ))}
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      ) : <FallbackSpinner />}
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
