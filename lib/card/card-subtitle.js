import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardSubtitle } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'h6',
};

const CardSubtitle = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardSubtitle);

  return <Tag {...attributes} className={classes} />;
};

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
