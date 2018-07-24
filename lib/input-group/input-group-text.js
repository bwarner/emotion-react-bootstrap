import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { inputGroupText } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'span',
};

const InputGroupText = (props) => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = cx(className, inputGroupText);

  return <Tag {...attributes} className={classes} />;
};

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;

export default InputGroupText;
