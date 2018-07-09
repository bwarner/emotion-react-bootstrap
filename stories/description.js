import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
  return (
    <div style={{ height: 'inherit' }}>
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      {props.children}
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  children: PropTypes.node,
};
