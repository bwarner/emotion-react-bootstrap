import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardBody } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardBody = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardBody);

  return <Tag {...attributes} className={classes} />;
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
