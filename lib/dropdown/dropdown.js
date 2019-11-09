/* globals document */
/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Manager } from 'react-popper';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import {
  inputGroupAppend,
  inputGroupPrepend,
  btnGroup,
  dropdown,
  dropleft,
  dropright,
  dropup,
  dropdownItem,
  dropdownMenu,
  show,
  active,
} from '@farvisionllc/emotion-bootstrap';
import omit from 'lodash.omit';
import { btnGroupSize, keyCodes } from '../utilities';

const addOnMap = {
  prepend: inputGroupPrepend,
  append: inputGroupAppend,
};
function addOnClass(name) {
  return addOnMap[name];
}
const directionMap = {
  left: dropleft,
  right: dropright,
  up: dropup,
  down: dropdown,
};
function directionClass(name) {
  return directionMap[name];
}

const propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  addonType: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['prepend', 'append']),
  ]),
  size: PropTypes.oneOf(['lg', 'sm']),
  tag: PropTypes.string,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false,
};

const childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getChildContext() {
    const {
      toggle, isOpen, direction, inNavbar,
    } = this.props;
    return {
      toggle,
      isOpen,
      direction,
      inNavbar,
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  addEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  }

  handleDocumentClick(e) {
    if (
      e
      && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))
    ) {
      return;
    }
    const container = this.getContainer();

    if (
      container.contains(e.target)
      && container !== e.target
      && (e.type !== 'keyup' || e.which === keyCodes.tab)
    ) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    const { disabled, isOpen } = this.props;
    if (
      [keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(
        e.which,
      ) === -1
      || (/button/i.test(e.target.tagName) && e.which === keyCodes.space)
      || /input|textarea/i.test(e.target.tagName)
    ) {
      return;
    }

    e.preventDefault();
    if (disabled) {
      return;
    }

    const container = this.getContainer();

    if (e.which === keyCodes.space && isOpen && container !== e.target) {
      e.target.click();
    }

    if (e.which === keyCodes.esc || !isOpen) {
      this.toggle(e);
      container.querySelector('[aria-expanded]').focus();
      return;
    }

    const menuClass = dropdownMenu;
    const itemClass = dropdownItem;
    const disabledClass = 'disabled';

    const items = container.querySelectorAll(
      `.${menuClass} .${itemClass}:not(.${disabledClass})`,
    );
    if (!items.length) {
      return;
    }

    let index = -1;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i] === e.target) {
        index = i;
        break;
      }
    }

    if (e.which === keyCodes.up && index > 0) {
      index -= 1;
    }

    if (e.which === keyCodes.down && index < items.length - 1) {
      index += 1;
    }

    if (index < 0) {
      index = 0;
    }

    items[index].focus();
  }

  handleProps() {
    const { isOpen } = this.props;
    if (isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    const { disabled, toggle } = this.props;
    if (disabled) {
      return e && e.preventDefault();
    }

    return toggle(e);
  }

  render() {
    const {
      className,
      isOpen,
      group,
      size,
      nav,
      setActiveFromChild,
      active: isActive,
      addonType,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']);

    const { direction, children } = this.props;

    attrs.tag = attrs.tag || (nav ? 'li' : 'div');
    let subItemIsActive = false;
    if (setActiveFromChild) {
      React.Children.map(children[1].props.children, (item) => {
        if (item.props.active) {
          subItemIsActive = true;
        }
      });
    }

    const classes = [
      className,
      direction !== 'down' && directionClass(direction),
      isActive && nav,
      setActiveFromChild && subItemIsActive && active,
      group && !addonType && addOnClass(addonType),
      size && btnGroupSize(size),
      {
        [active]: setActiveFromChild && subItemIsActive,
        [btnGroup]: group,
        [dropdown]: !group && !addonType,
        [show]: isOpen,
        'nav-item': nav,
      },
    ];

    return (
      <ClassNames>
        {({ cx }) => (
          <Manager
            {...attrs}
            className={cx(classes)}
            onKeyDown={this.handleKeyDown}
          />
        )}
      </ClassNames>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
