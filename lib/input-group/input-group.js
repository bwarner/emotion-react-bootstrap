import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  inputGroupLg,
  inputGroupSm,
  inputGroup,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['lg', 'sm']),
  className: PropTypes.string,
};

const sizeMap = {
  lg: inputGroupLg,
  sm: inputGroupSm,
};

const defaultProps = {
  tag: 'div',
};

const InputGroup = (props) => {
  const {
    className, tag: Tag, size, ...attributes
  } = props;
  const classes = cx(className, sizeMap[size], inputGroup);
  return <Tag {...attributes} className={`${classes}`} />;
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
