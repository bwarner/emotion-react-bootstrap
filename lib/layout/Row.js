import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { row, noGutters } from 'emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Row = (props) => {
  const {
    className, noGutters: noGutterFlag, tag: Tag, ...attributes
  } = props;

  const classes = cx(className, noGutterFlag ? noGutters : null, row);

  return <Tag {...attributes} className={classes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
