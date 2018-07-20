import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { formText } from '@farvisionllc/emotion-bootstrap';
import { textColor } from '../utilities';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'small',
  color: 'muted',
};

const FormText = (props) => {
  const {
    className, inline, color, tag: Tag, ...attributes
  } = props;

  const classes = cx(className, !inline ? formText : false, textColor(color));

  return <Tag {...attributes} className={classes} />;
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
