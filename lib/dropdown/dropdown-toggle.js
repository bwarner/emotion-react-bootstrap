import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Target } from 'react-popper';
import {
  navLink,
  dropdownToggle,
  dropdownToggleSplit,
} from 'emotion-bootstrap';
import { Button } from '../button';

const propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool,
};

const defaultProps = {
  'aria-haspopup': true,
  color: 'secondary',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

class DropdownToggle extends React.Component {
  onClick = (e) => {
    debugger;
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  render() {
    const {
      className, color, caret, split, nav, tag, ...props
    } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = cx(
      className,
      (caret || split) && dropdownToggle,
      split && dropdownToggleSplit,
      nav && navLink,
    );
    const children = props.children || (
      <span className="sr-only">{ariaLabel}</span>
    );

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return (
        <Tag
          {...props}
          className={classes}
          onClick={this.onClick}
          aria-expanded={this.context.isOpen}
        >
          {children}
        </Tag>
      );
    }

    return (
      <Target
        {...props}
        className={classes}
        component={Tag}
        onClick={this.onClick}
        aria-expanded={this.context.isOpen}
      >
        {children}
      </Target>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
