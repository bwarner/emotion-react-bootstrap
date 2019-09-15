import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { pageItem, active } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'li',
};

const PaginationItem = (props) => {
  const {
    active: activeCss,
    className,
    disabled: disabledCss,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(className, pageItem);

  return (
    <Tag
      {...attributes}
      className={`${classes} ${activeCss ? active : ''} ${
        disabledCss ? 'disabled' : ''
      }`}
    />
  );
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
