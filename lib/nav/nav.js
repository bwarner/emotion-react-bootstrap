import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  navbarNav,
  nav,
  justifyContentAround,
  justifyContentCenter,
  justifyContentEnd,
  justifyContentBetween,
  flexColumn,
  flexSmColumn,
  flexMdColumn,
  flexLgColumn,
  flexXlColumn,
  navTabs,
  cardHeaderTabs,
  navPills,
  cardHeaderPills,
  navJustified,
  navFill,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  navbar: PropTypes.bool,
  card: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const jutifyCenterMap = {
  start: justifyContentAround,
  center: justifyContentCenter,
  end: justifyContentEnd,
  around: justifyContentAround,
  between: justifyContentBetween,
};

const flexColumnMap = {
  sm: flexSmColumn,
  md: flexMdColumn,
  lg: flexLgColumn,
  xl: flexXlColumn,
};

const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical) => {
  if (vertical === false) {
    return false;
  }
  if (vertical === true || vertical === 'xs') {
    return flexColumn;
  }

  return flexColumnMap[vertical];
};

const Nav = (props) => {
  const {
    className,
    tabs,
    pills,
    vertical,
    horizontal,
    justified,
    fill,
    navbar,
    card,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    navbar ? navbarNav : nav,
    horizontal ? jutifyCenterMap[horizontal] : false,
    getVerticalClass(vertical),
    tabs && navTabs,
    card && tabs && cardHeaderTabs,
    pills && navPills,
    card && pills && cardHeaderPills,
    justified && navJustified,
    fill && navFill,
  );

  return <Tag {...attributes} className={classes} />;
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
