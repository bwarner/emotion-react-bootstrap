import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
  const { title, summary, children } = props;
  return (
    <div style={{ height: 'inherit' }}>
      <h2>
        {title}
      </h2>
      <p>
        {summary}
      </p>
      {children}
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  children: PropTypes.node,
};
