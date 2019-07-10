import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
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

  const classes = cx(className, activeProp ? active : false);

  return <Tag {...attributes} className={`${classes} .nav-item`} />;
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
