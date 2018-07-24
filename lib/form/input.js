/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  formCheckInput,
  formControl,
  formControlLg,
  formControlSm,
  formControlPlaintext,
  formControlFile,
} from '@farvisionllc/emotion-bootstrap';

const bsSizeMap = {
  sm: formControlSm,
  lg: formControlLg,
};

class Input extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    bsSize: PropTypes.string,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    plaintext: PropTypes.bool,
    addon: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  getRef = (ref) => {
    const { innerRef } = this.props;
    if (innerRef) {
      innerRef(ref);
    }
    this.ref = ref;
  };

  focus = () => {
    if (this.ref) {
      this.ref.focus();
    }
  };

  render() {
    const {
      className,
      type,
      tag,
      addon,
      plaintext,
      innerRef,
      valid,
      invalid,
      ...attributes
    } = this.props;

    const { bsSize } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = tag || (selectInput || textareaInput ? type : 'input');

    let formControlClass = formControl;

    if (plaintext) {
      formControlClass = formControlPlaintext;
      Tag = tag || 'p';
    } else if (fileInput) {
      formControlClass = formControlFile;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = formCheckInput;
      }
    }

    const classes = cx(
      className,
      invalid && 'is-invalid',
      valid && 'is-valid',
      bsSizeMap[bsSize],
    );

    if (Tag === 'input' || typeof tag !== 'string') {
      attributes.type = type;
    }

    return (
      <Tag
        {...attributes}
        ref={innerRef}
        className={`${classes} ${formControlClass}`}
      />
    );
  }
}

export default Input;
