import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardDeck } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardDeck = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardDeck);

  return <Tag {...attributes} className={classes} />;
};

CardDeck.propTypes = propTypes;
CardDeck.defaultProps = defaultProps;

export default CardDeck;
