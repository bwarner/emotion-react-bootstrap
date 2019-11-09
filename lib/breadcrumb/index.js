import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { breadcrumb } from '@farvisionllc/emotion-bootstrap';

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

  const listClasses = [breadcrumb, listClassName];
  return (
    <ClassNames>
      {({ cx }) => (
        <Tag {...attributes} className={className} aria-label={label}>
          <ListTag className={cx(listClasses)}>{children}</ListTag>
        </Tag>
      )}
    </ClassNames>
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
