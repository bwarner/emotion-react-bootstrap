/* globals document */
/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Manager } from 'react-popper';
import { cx } from 'emotion';
import {
  inputGroupAppend,
  inputGroupPrepend,
  btnGroup,
  dropleft,
  dropright,
  dropup,
  dropdown,
  dropdownItem,
  dropdownMenu,
  show,
} from 'emotion-bootstrap';
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
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction,
      inNavbar: this.props.inNavbar,
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
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
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true));
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true));
  }

  handleDocumentClick(e) {
    debugger;
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
    debugger;
    if (
      [keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1
      || (/button/i.test(e.target.tagName) && e.which === keyCodes.space)
      || /input|textarea/i.test(e.target.tagName)
    ) {
      return;
    }

    e.preventDefault();
    if (this.props.disabled) {
      return;
    }

    const container = this.getContainer();

    if (
      e.which === keyCodes.space
      && this.props.isOpen
      && container !== e.target
    ) {
      e.target.click();
    }

    if (e.which === keyCodes.esc || !this.props.isOpen) {
      this.toggle(e);
      container.querySelector('[aria-expanded]').focus();
      return;
    }

    const menuClass = dropdownMenu;
    const itemClass = dropdownItem;
    const disabledClass = 'disabled';

    const items = container.querySelectorAll(`.${menuClass} .${itemClass}:not(.${disabledClass})`);
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
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const {
      className,
      isOpen,
      group,
      size,
      nav,
      setActiveFromChild,
      active,
      addonType,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']);

    const { direction } = this.props;

    attrs.tag = attrs.tag || (nav ? 'li' : 'div');
    let subItemIsActive = false;
    if (setActiveFromChild) {
      React.Children.map(
        this.props.children[1].props.children,
        (item) => {
          if (item.props.active) {
            subItemIsActive = true;
          }
        },
      );
    }

    const classes = cx(
      className,
      direction !== 'down' && directionClass(direction),
      nav && active ? 'active' : false,
      setActiveFromChild && subItemIsActive ? 'active' : false,
      size && btnGroupSize(size),
      group && btnGroup,
      group && !addonType && addOnClass(addonType),
      !group && !addonType && dropdown,
      isOpen && show,
      {
        'nav-item': nav,
      },
    );

    return (
      <Manager {...attrs} className={classes} onKeyDown={this.handleKeyDown} />
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
