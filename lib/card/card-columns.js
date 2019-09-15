import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardColumns } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardColumns = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, cardColumns);

  return <Tag {...attributes} className={classes} />;
};

CardColumns.propTypes = propTypes;
CardColumns.defaultProps = defaultProps;

export default CardColumns;
