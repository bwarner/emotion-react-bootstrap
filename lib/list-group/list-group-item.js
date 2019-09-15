import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  active,
  listGroupItem,
  listGroupItemPrimary,
  listGroupItemSecondary,
  listGroupItemSuccess,
  listGroupItemDanger,
  listGroupItemWarning,
  listGroupItemInfo,
  listGroupItemLight,
  listGroupItemDark,
  listGroupItemAction,
} from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

const colors = {
  primary: listGroupItemPrimary,

  secondary: listGroupItemSecondary,

  success: listGroupItemSuccess,

  danger: listGroupItemDanger,

  warning: listGroupItemWarning,

  info: listGroupItemInfo,

  light: listGroupItemLight,

  dark: listGroupItemDark,
};

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  action: PropTypes.bool,
  className: PropTypes.any,
};

const defaultProps = {
  tag: 'li',
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

const ListGroupItem = (props) => {
  const {
    className,
    tag: Tag,
    active: activeProp,
    disabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = cx(className, disabled ? 'disabled' : false, listGroupItem);
  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (
    <Tag
      {...attributes}
      className={`${classes} ${color ? colors[color] : ''} ${
        activeProp ? active : ''
      } ${action ? listGroupItemAction : ''}`}
    />
  );
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
