import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { active } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  tabId: PropTypes.any,
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  activeTabId: PropTypes.any,
};

export default function TabPane(props, context) {
  const {
    className, tabId, tag: Tag, ...attributes
  } = props;
  const classes = classNames(
    className,
    tabId === context.activeTabId && active,
  );
  return <Tag {...attributes} className={`${classes} tab-pane `} />;
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;
TabPane.contextTypes = contextTypes;
