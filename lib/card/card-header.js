import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardHeader } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'h5',
};

const CardHeader = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardHeader);

  return <Tag {...attributes} className={classes} />;
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
