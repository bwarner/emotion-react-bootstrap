import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { breadcrumbItem } from '@farvisionllc/emotion-bootstrap';

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
    className, active: activeProp, tag: Tag, ...attributes
  } = props;

  const classes = [className, { active: activeProp }, breadcrumbItem];

  return (
    <ClassNames>
      {({ cx }) => (
        <Tag
          {...attributes}
          className={cx(classes)}
          aria-current={activeProp ? 'page' : undefined}
        />
      )}
    </ClassNames>
  );
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
