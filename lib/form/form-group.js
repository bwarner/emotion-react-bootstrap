import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  formCheck,
  formCheckInline,
  formGroup,
  positionRelative,
  row,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = (props) => {
  const {
    className,
    row: rowProp,
    disabled,
    check,
    inline,
    tag: Tag,
    ...attributes
  } = props;

  const classes = cx(
    className,
    rowProp ? row : false,
    check ? formCheck : formGroup,
    check && inline ? formCheckInline : false,
    check && disabled ? 'disabled' : false,
  );

  return <Tag {...attributes} className={`${classes} ${positionRelative}`} />;
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
