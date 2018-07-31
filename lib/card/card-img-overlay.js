import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardImgOverlay } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardImgOverlay = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardImgOverlay);

  return <Tag {...attributes} className={classes} />;
};

CardImgOverlay.propTypes = propTypes;
CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;
