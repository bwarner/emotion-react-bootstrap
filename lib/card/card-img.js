import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  cardImg,
  carImgTop,
  cardImgBottom,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'img',
};

const CardImg = (props) => {
  const {
    className, top, bottom, tag: Tag, ...attributes
  } = props;

  let cardImgClassName = cardImg;
  if (top) {
    cardImgClassName = carImgTop;
  }
  if (bottom) {
    cardImgClassName = cardImgBottom;
  }

  const classes = classNames(className, cardImgClassName);

  return <Tag {...attributes} className={classes} />;
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;
