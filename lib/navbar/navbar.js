import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import {
  navbar,
  navbarExpand,
  bgDanger,
  bgDark,
  bgInfo,
  bgLight,
  bgPrimary,
  bgSecondary,
  bgSuccess,
  bgTransparent,
  bgWarning,
  bgWhite,
  fixedBottom,
  fixedTop,
  navbarDark,
  navbarLight,
  navbarExpandLg,
  navbarExpandSm,
  navbarExpandMd,
  navbarExpandXl,
  stickyTop,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
  tag: 'nav',
  expand: false,
};

const bgColorMap = {
  danger: bgDanger,
  dark: bgDark,
  info: bgInfo,
  light: bgLight,
  primary: bgPrimary,
  secondary: bgSecondary,
  success: bgSuccess,
  transparent: bgTransparent,
  warning: bgWarning,
  white: bgWhite,
};

const fixedMap = {
  bottom: fixedBottom,
  top: fixedTop,
};

const navbarExpandMap = {
  lg: navbarExpandLg,
  md: navbarExpandMd,
  sm: navbarExpandSm,
  xl: navbarExpandXl,
};

const stickyMap = {
  top: stickyTop,
};

const getExpandClass = (expand) => {
  if (expand === false) {
    return false;
  }

  if (expand === true || expand === 'xs') {
    return navbarExpand;
  }

  return navbarExpandMap[expand];
};

const Navbar = (props) => {
  const {
    expand,
    className,
    cssModule,
    light,
    dark,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = cx(
    className,
    navbar,
    getExpandClass(expand),
    light && navbarLight,
    dark && navbarDark,
    color && bgColorMap[color],
    fixed && fixedMap[fixed],
    sticky && stickyMap[sticky],
  );

  return <Tag {...attributes} className={classes} />;
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
