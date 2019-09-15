import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  customControl,
  customControlLabel,
  customControlInput,
  customFileInput,
  customCheckbox,
  customFile,
  customSelect,
  customSelectLg,
  customSelectSm,
  customFileLabel,
  customRadio,
} from '@farvisionllc/emotion-bootstrap';

function customType(type, bsSize) {
  if (type === 'check') {
    return customCheckbox;
  }
  if (type === 'radio') {
    return customRadio;
  }
  if (type === 'file') {
    return customFile;
  }
  if (type === 'select') {
    if (bsSize === 'lg') {
      return customSelectLg;
    }
    if (bsSize === 'sm') {
      return customSelectSm;
    }
    return customSelect;
  }
  return undefined;
}

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.func,
  ]),
};

function CustomInput(props) {
  const {
    className,
    label,
    inline,
    valid,
    invalid,
    children,
    bsSize,
    ...attributes
  } = props;

  const { type } = attributes;

  const customClass = cx(
    className,
    customType(type),
    bsSize && customType(type, bsSize),
  );

  const validationClassNames = cx(invalid && 'is-invalid', valid && 'is-valid');

  if (type === 'select') {
    return (
      <select {...attributes} className={cx(validationClassNames, customClass)}>
        {children}
      </select>
    );
  }

  if (type === 'file') {
    return (
      <div className={customClass}>
        <input
          {...attributes}
          className={cx(validationClassNames, customFileInput)}
        />
        <label className={customFileLabel} htmlFor={attributes.id}>
          {label || 'Choose file'}
        </label>
      </div>
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return (
      <input
        {...attributes}
        className={cx(validationClassNames, customClass)}
      />
    );
  }

  const wrapperClasses = cx(
    customClass,
    customControl,
    cx(customControl, { customControlInline: inline }),
  );

  return (
    <div className={wrapperClasses}>
      <input
        {...attributes}
        className={cx(validationClassNames, customControlInput)}
      />
      <label className={customControlLabel} htmlFor={attributes.id}>
        {label}
      </label>
      {children}
    </div>
  );
}

CustomInput.propTypes = propTypes;

export default CustomInput;
