import React from 'react';
import PropTypes from 'prop-types';
import {
  invalidFeedback,
  invalidTooltip,
  validTooltip,
  validFeedback,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  valid: undefined,
};

function validClassName(valid, validMode) {
  if (validMode === 'tooltip') {
    if (valid) {
      return validTooltip;
    }
    return invalidTooltip;
  }
  if (valid) {
    return validFeedback;
  }
  return invalidFeedback;
}

const FormFeedback = (props) => {
  const {
    className, valid, tooltip, tag: Tag, ...attributes
  } = props;

  const validMode = tooltip ? 'tooltip' : 'feedback';

  return (
    <Tag
      {...attributes}
      className={`${className} ${validClassName(valid, validMode)}`}
    />
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
