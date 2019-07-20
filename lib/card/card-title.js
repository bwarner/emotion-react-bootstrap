import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardTitle } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardTitle = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardTitle);

  return <Tag {...attributes} className={classes} />;
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
