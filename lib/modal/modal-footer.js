import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { modalFooter } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const ModalFooter = (props) => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = cx(className, modalFooter);

  return <Tag {...attributes} className={classes} />;
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
