import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { popoverBody } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const PopoverBody = (props) => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = classNames(className, popoverBody);

  return <Tag {...attributes} className={classes} />;
};

PopoverBody.propTypes = propTypes;
PopoverBody.defaultProps = defaultProps;

export default PopoverBody;
