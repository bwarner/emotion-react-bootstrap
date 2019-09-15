import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardGroup } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardGroup = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardGroup);

  return <Tag {...attributes} className={classes} />;
};

CardGroup.propTypes = propTypes;
CardGroup.defaultProps = defaultProps;

export default CardGroup;
