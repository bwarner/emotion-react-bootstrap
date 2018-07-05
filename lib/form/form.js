import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { formInline } from 'emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className,
    cssModule,
    inline,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;

  const classes = cx(className, inline ? formInline : false);

  return <Tag {...attributes} ref={innerRef} className={classes} />;
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
