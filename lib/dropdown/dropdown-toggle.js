import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { Target } from 'react-popper';
import {
  navLink,
  dropdownToggle,
  dropdownToggleSplit,
  srOnly,
} from '@farvisionllc/emotion-bootstrap';
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
    const {
      disabled, nav, tag, onClick,
    } = this.props;
    const { toggle } = this.context;
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (nav && !tag) {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }

    toggle(e);
  };

  render() {
    const {
      className, color, caret, split, nav, tag, ...props
    } = this.props;
    const { inNavbar, isOpen } = this.context;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = [
      className,
      {
        [dropdownToggle]: caret || split,
        [dropdownToggleSplit]: split,
        [navLink]: nav,
      },
    ];

    const children = props.children || (
      <span className={srOnly}>{ariaLabel}</span>
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

    if (inNavbar) {
      return (
        <ClassNames>
          {({ cx }) => (
            <Tag
              {...props}
              className={cx(classes)}
              onClick={this.onClick}
              aria-expanded={isOpen}
            >
              {children}
            </Tag>
          )}
        </ClassNames>
      );
    }

    return (
      <ClassNames>
        {({ cx }) => (
          <Target
            {...props}
            className={cx(classes)}
            component={Tag}
            onClick={this.onClick}
            aria-expanded={isOpen}
          >
            {children}
          </Target>
        )}
      </ClassNames>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
