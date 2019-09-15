import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  navbarToggler,
  navbarTogglerIcon,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
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

  const classes = cx(className, navbarToggler);

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={cx(navbarTogglerIcon)} />}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
