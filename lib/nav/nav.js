import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { navbarNav, nav } from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

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

const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical) => {
  if (vertical === false) {
    return false;
  }
  if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return `flex-${vertical}-column`;
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

  const classes = cx(
    className,
    navbar ? navbarNav : nav,
    horizontal ? `justify-content-${horizontal}` : false,
    getVerticalClass(vertical),
    {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill,
    },
  );

  return <Tag {...attributes} className={classes} />;
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
