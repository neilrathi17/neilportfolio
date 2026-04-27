import React, { useEffect, useState, useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {Fade,Slide} from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';
import 'react-vertical-timeline-component/style.min.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <VerticalTimeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item, index) => (
                  <Fade triggerOnce duration={700} cascade fraction={0.1} delay={index * 100}>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                      key={item.title + item.dateText}
                      dateText={item.dateText}
                      dateInnerStyle={{ background: theme.accentColor, color: '#000000' }}
                      style={styles.itemStyle}
                      contentStyle={{ background: theme.chronoTheme.cardBgColor, color: theme.chronoTheme.cardForeColor, border: `2px solid ${theme.accentColor}`, borderRadius: '8px' }}
                      contentArrowStyle={{ borderRight: `7px solid ${theme.accentColor}` }}
                      bodyContainerStyle={{ color: theme.chronoTheme.cardForeColor }}
                      position={index % 2 === 0 ? 'left' : 'right'}
                    >
                      <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          {item.subtitle}
                        </h4>
                        {item.workType && (
                        <h5 style={{...styles.subtitleStyle, color: theme.accentColor }}>
                    &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                        )}
                      </div>
                      <ul style={{...styles.ulStyle, color: theme.chronoTheme.cardForeColor}}>
                        {item.workDescription.map((point) => (
                          <div key={point}>
                            <li>
                              <ReactMarkdown
                                children={point}
                                components={{
                                  p: 'span',
                                }}
                              />
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </VerticalTimelineElement>
                  </Fade>
                ))}
              </VerticalTimeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;