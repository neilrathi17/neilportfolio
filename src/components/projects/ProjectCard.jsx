import React, { useContext } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitleStyle: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 15,
  },
  cardTextStyle: {
    textAlign: 'left',
    lineHeight: 1.6,
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
  cardBodyStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  const { project } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        text={theme.bsSecondaryVariant}
        className="h-100"
      >
        <Card.Body style={styles.cardBodyStyle}>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
