import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button, Nav, Tab } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import {Fade} from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
  tabContainerStyle: {
    marginBottom: 30,
    justifyContent: 'center',
    display: 'flex',
  },
  tabStyle: {
    cursor: 'pointer',
    padding: '10px 30px',
    margin: '0 10px',
    borderRadius: 25,
    transition: 'all 0.3s ease',
    fontWeight: 600,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('ai');

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const filteredProjects = data?.projects?.filter(
    (project) => project.category === activeTab
  );

  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <div style={styles.tabContainerStyle}>
                <Nav variant="pills" activeKey={activeTab} onSelect={setActiveTab}>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="computer-vision"
                      style={{
                        ...styles.tabStyle,
                        backgroundColor: activeTab === 'computer-vision' ? theme.accentColor : 'transparent',
                        color: activeTab === 'computer-vision' ? '#fff' : theme.color,
                        border: `2px solid ${theme.accentColor}`,
                      }}
                    >
                      Computer Vision
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="ai"
                      style={{
                        ...styles.tabStyle,
                        backgroundColor: activeTab === 'ai' ? theme.accentColor : 'transparent',
                        color: activeTab === 'ai' ? '#fff' : theme.color,
                        border: `2px solid ${theme.accentColor}`,
                      }}
                    >
                      AI
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                {filteredProjects?.map((project) => (
                  <Fade triggerOnce='true' direction="down" key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
