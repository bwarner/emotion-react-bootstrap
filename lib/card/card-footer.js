import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardFooter } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'h5',
};

const CardFooter = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardFooter);

  return <Tag {...attributes} className={classes} />;
};

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
