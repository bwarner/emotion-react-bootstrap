import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
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
} from '@farvisionllc/emotion-bootstrap';

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
    disabled: isDisabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = [
    className,
    { disabled: isDisabled },
    listGroupItem,
    {
      [colors[color]]: color,
      [active]: activeProp,
      [listGroupItemAction]: activeProp,
    },
  ];
  // Prevent click event when disabled.
  if (isDisabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
