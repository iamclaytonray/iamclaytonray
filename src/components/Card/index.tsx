import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
// import { Audio } from '../Audio';

import './card.scss';

interface Props {
  title: string;
  link?: string;
  description?: string;
  technologies?: string[];
  type?: string;
  audio?: boolean;
  source?: string;
}

const styles = {
  card: {
    border: '1px solid none',
    borderRadius: 4,
    boxShadow: '0 0 20px #aaa',
    backgroundColor: '#fff',
    padding: 25,
    height: 300,
    width: 500,

    marginBottom: 50,
    transition: 'all 500ms ease-in-out',
    display: 'inline-block',
    marginLeft: 24,
    marginRight: 24,
    '&:hover': {
      boxShadow: '0 0 40px darken(#aaa, 14)',
    },
  },
  cardTitle: {
    fontSize: 18,
    color: '#000',
  },
  cardDescription: {
    color: '#000',
    whitespace: 'pre-wrap',
  },
};

export const Card = ({
  title,
  link,
  description,
  type,
  audio,
  source,
}: Props) => {
  if (audio) {
    return (
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p className="card-description">{description}</p>
        {/* <Audio source={source} /> */}
      </div>
    );
  }

  if (type === 'section') {
    return (
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{ReactHtmlParser(description)}</p>
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
};
