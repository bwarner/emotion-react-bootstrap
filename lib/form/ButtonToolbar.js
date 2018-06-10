import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { btnToolbar } from 'emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

const ButtonToolbar = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = cx(
    className,
    btnToolbar,
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
