import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { popoverHeader } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'h3',
};

const PopoverHeader = (props) => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = classNames(className, popoverHeader);

  return <Tag {...attributes} className={classes} />;
};

PopoverHeader.propTypes = propTypes;
PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
