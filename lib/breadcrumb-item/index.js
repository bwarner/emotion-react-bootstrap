import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { breadcrumbItem } from 'emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'li',
};

const BreadcrumbItem = (props) => {
  const {
    className, active, tag: Tag, ...attributes
  } = props;

  const classes = cx(className, active && 'active', breadcrumbItem);

  return (
    <Tag
      {...attributes}
      className={classes}
      aria-current={active ? 'page' : undefined}
    />
  );
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
