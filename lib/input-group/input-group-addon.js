import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  inputGroupAppend,
  inputGroupPrepend,
} from '@farvisionllc/emotion-bootstrap';
import InputGroupText from './input-group-text';

const addOnMap = {
  prepend: inputGroupPrepend,
  append: inputGroupAppend,
};

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(Object.keys(addOnMap)).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const InputGroupAddon = (props) => {
  const {
    className, tag: Tag, addonType, children, ...attributes
  } = props;

  const classes = cx(className, addOnMap[addonType]);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return (
      <Tag {...attributes} className={classes}>
        <InputGroupText>
          {children}
        </InputGroupText>
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
