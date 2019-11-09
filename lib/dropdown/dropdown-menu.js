import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { Popper } from 'react-popper';
import {
  dropdownMenu,
  dropdownMenuRight,
  show,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  persist: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  flip: true,
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

const noFlipModifier = { flip: { enabled: false } };

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom',
};

const DropdownMenu = (props, context) => {
  const {
    className, right, tag, flip, modifiers, persist, ...attrs
  } = props;

  const classes = [
    className,
    dropdownMenu,
    {
      [dropdownMenuRight]: right,
    },
  ];

  let Tag = tag;
  const { isOpen, inNavbar } = context;
  if (persist || (isOpen && !inNavbar)) {
    Tag = Popper;

    const position1 = directionPositionMap[context.direction] || 'bottom';
    const position2 = right ? 'end' : 'start';
    attrs.placement = `${position1}-${position2}`;
    attrs.component = tag;
    attrs.modifiers = !flip
      ? {
        ...modifiers,
        ...noFlipModifier,
      }
      : modifiers;
  }

  return (
    <ClassNames>
      {({ cx }) => (
        <Tag
          tabIndex="-1"
          role="menu"
          {...attrs}
          aria-hidden={!isOpen}
          className={cx(classes, { [show]: isOpen })}
          x-placement={attrs.placement}
        />
      )}
    </ClassNames>
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;
