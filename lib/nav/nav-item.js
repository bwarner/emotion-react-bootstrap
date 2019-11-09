/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { active } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li',
};

const NavItem = (props) => {
  const {
    className, active: activeProp, tag: Tag, ...attributes
  } = props;

  return (
    <ClassNames>
      {({ cx }) => (
        <Tag
          {...attributes}
          className={cx([className, { [active]: activeProp }, 'nav-item'])}
        />
      )}
    </ClassNames>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
