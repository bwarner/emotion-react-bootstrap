import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { navLink, active } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.any,
};

const defaultProps = {
  tag: 'a',
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      className,
      active: activeProp,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(className, navLink, activeProp && active);

    return (
      <Tag
        {...attributes}
        ref={innerRef}
        onClick={this.onClick}
        className={`${classes} ${attributes.disabled ? 'disabled' : ''} `}
      />
    );
  }
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
