import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

function bgColor(color) {
  const className = bgColorMap[color];
  if (!className) {
    throw new Error(`color ${color} not supported`);
  }
  return className;
}

const fixedMap = {
  bottom: fixedBottom,
  top: fixedTop,
};

function fixTo(position) {
  const className = fixedMap[position];
  if (!className) {
    throw new Error(`position ${position} not supported`);
  }
  return className;
}

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
    light,
    dark,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    navbar,
    getExpandClass(expand),
    light && navbarLight,
    dark && navbarDark,
    color && bgColor(color),
    fixed && fixTo(fixed),
    sticky && stickyMap[sticky],
  );

  return <Tag {...attributes} className={classes} />;
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
