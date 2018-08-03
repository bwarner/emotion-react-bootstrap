import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { navbarBrand } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'a',
};

const NavbarBrand = (props) => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = cx(className, navbarBrand);

  return <Tag {...attributes} className={classes} />;
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
