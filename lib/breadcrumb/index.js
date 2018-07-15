import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { breadcrumb } from 'emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  listClassName: PropTypes.string,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb',
};

const Breadcrumb = (props) => {
  const {
    className,
    listClassName,
    children,
    tag: Tag,
    listTag: ListTag,
    'aria-label': label,
    ...attributes
  } = props;

  const classes = cx(className);
  const listClasses = cx(breadcrumb, listClassName);

  return (
    <Tag {...attributes} className={classes} aria-label={label}>
      <ListTag className={listClasses}>
        {children}
      </ListTag>
    </Tag>
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
