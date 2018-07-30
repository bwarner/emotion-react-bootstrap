import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { modalBody } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const ModalBody = (props) => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, modalBody);

  return <Tag {...attributes} className={classes} />;
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
