import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  navbarToggler,
  navbarTogglerIcon,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  tag: 'button',
  type: 'button',
};

const NavbarToggler = (props) => {
  const {
    className, children, tag: Tag, ...attributes
  } = props;

  const classes = classNames(className, navbarToggler);

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={navbarTogglerIcon} />}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
