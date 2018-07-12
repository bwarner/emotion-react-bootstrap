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
} from 'emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  type: 'text',
};

const bsSizeMap = {
  sm: formControlSm,
  lg: formControlLg,
};

class Input extends React.Component {
  render() {
    const {
      className,
      type,
      tag,
      addon,
      plaintext,
      innerRef,
      valid,
      ...attributes
    } = this.props;

    let { bsSize } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    const isNotaNumber = new RegExp('\\D', 'g');

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

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      /* eslint-disable-next-line no-console */
      console.error(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.',
      );
      bsSize = attributes.size;
      delete attributes.size;
    }

    const classes = cx(
      className,
      valid === false && 'is-invalid',
      valid && 'is-valid',
      bsSize ? bsSizeMap[bsSize] : false,
      formControlClass,
    );

    if (Tag === 'input' || typeof tag !== 'string') {
      attributes.type = type;
    }

    return <Tag {...attributes} ref={innerRef} className={classes} />;
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
