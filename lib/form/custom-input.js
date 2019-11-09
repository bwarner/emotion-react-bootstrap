import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
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

  const customClass = [
    className,
    customType(type),
    {
      [customType(type, bsSize)]: bsSize,
    },
  ];

  const validationClassNames = { 'is-invalid': invalid, 'is-valid': valid };

  if (type === 'select') {
    return (
      <ClassNames>
        {({ cx }) => (
          <select
            {...attributes}
            className={cx(validationClassNames, customClass)}
          >
            {children}
          </select>
        )}
      </ClassNames>
    );
  }

  if (type === 'file') {
    return (
      <ClassNames>
        {({ cx }) => (
          <div className={customClass}>
            <input
              {...attributes}
              className={cx(validationClassNames, customFileInput)}
            />
            <label className={customFileLabel} htmlFor={attributes.id}>
              {label || 'Choose file'}
            </label>
          </div>
        )}
      </ClassNames>
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return (
      <ClassNames>
        {({ cx }) => (
          <input
            {...attributes}
            className={cx(validationClassNames, customClass)}
          />
        )}
      </ClassNames>
    );
  }

  const wrapperClasses = [
    customClass,
    customControl,
    {
      customControlInline: inline,
    },
  ];

  return (
    <ClassNames>
      {({ cx }) => (
        <div className={cx(wrapperClasses)}>
          <input
            {...attributes}
            className={cx(validationClassNames, customControlInput)}
          />
          <label className={cx(customControlLabel)} htmlFor={attributes.id}>
            {label}
          </label>
          {children}
        </div>
      )}
    </ClassNames>
  );
}

CustomInput.propTypes = propTypes;

export default CustomInput;
