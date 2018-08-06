import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noGutters, row } from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Row = (props) => {
  const {
    className,
    noGutters: noGuttersProp,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(className, noGuttersProp ? noGutters : null, row);

  return <Tag {...attributes} className={classes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
