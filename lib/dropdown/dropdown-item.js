import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import omit from 'lodash.omit';
import {
  dropdownItem,
  dropdownDivider,
  dropdownHeader,
  active,
} from 'emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  toggle: PropTypes.bool,
};

const contextTypes = {
  toggle: PropTypes.func,
};

const defaultProps = {
  tag: 'button',
  toggle: true,
};

class DropdownItem extends React.Component {
  onClick = (e) => {
    const {
      disabled, header, divider, onClick, toggle,
    } = this.props;
    const { toggle: toggleContext } = this.context;
    if (disabled || header || divider) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }

    if (toggle) {
      toggleContext(e);
    }
  };

  getTabIndex = () => {
    const { disabled, header, divider } = this.props;
    if (disabled || header || divider) {
      return '-1';
    }

    return '0';
  };

  render() {
    const tabIndex = this.getTabIndex();
    const {
      className, divider, header, active: activeFlag, ...props
    } = omit(
      this.props,
      ['toggle'],
    );

    let { tag: Tag } = this.props;
    const { onClick, toggle } = this.props;

    const classes = cx(
      className,
      header && dropdownHeader,
      divider && dropdownDivider,
      !divider && !header && dropdownItem,
      activeFlag && active,
      {
        disabled: props.disabled,
      },
    );

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      }
    }

    return (
      <Tag
        type={
          Tag === 'button' && (onClick || toggle)
            ? 'button'
            : undefined
        }
        {...props}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

export default DropdownItem;
