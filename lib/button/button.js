import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { btn, btnBlock, btnLg, btnSm } from 'emotion-bootstrap';
import { buttonOutlineColor, buttonColor } from '../utilities';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  tag: 'button',
  active: true,
};

const buttonSizeMap = {
  sm: btnSm,
  lg: btnLg,
};

class Button extends Component {
  onClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      active,
      block,
      className,
      color,
      outline,
      size,
      innerRef,
      ...attributes
    } = this.props;

    let { tag: Tag } = this.props;

    const classes = cx(
      className,
      btn,
      outline ? buttonOutlineColor(color) : buttonColor(color),
      size ? buttonSizeMap[size] : false,
      block ? btnBlock : false,
      { active, disabled: this.props.disabled },
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;