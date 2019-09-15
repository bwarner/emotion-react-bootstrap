import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  pagination,
  paginationLg,
  paginationSm,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination',
};

const Pagination = (props) => {
  const {
    className,
    listClassName,
    size,
    tag: Tag,
    listTag: ListTag,
    'aria-label': label,
    ...attributes
  } = props;

  const sizeMap = {
    Lg: paginationLg,
    Sm: paginationSm,
  };

  const classes = classNames(className);

  const listClasses = classNames(listClassName, pagination, sizeMap[size]);

  return (
    <Tag className={classes} aria-label={label}>
      <ListTag {...attributes} className={listClasses} />
    </Tag>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
