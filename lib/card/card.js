import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { card, cardBody, textWhite } from '@farvisionllc/emotion-bootstrap';
import { borderColor, bgColor } from '../utilities';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  tag: 'div',
};

const Card = (props) => {
  const {
    className,
    color,
    body,
    inverse,
    outline,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    card,
    inverse ? textWhite : false,
    body ? cardBody : false,
    color && (outline ? borderColor(color) : bgColor(color)),
  );
  return <Tag {...attributes} className={classes} ref={innerRef} />;
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
