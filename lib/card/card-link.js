import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardLink } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'a',
};

const CardLink = (props) => {
  const {
    className, tag: Tag, innerRef, ...attributes
  } = props;
  const classes = classNames(className, cardLink);

  return <Tag {...attributes} ref={innerRef} className={classes} />;
};

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
