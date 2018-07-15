import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { cx } from 'emotion';
import {
  alert,
  alertPrimary,
  alertSecondary,
  alertSuccess,
  alertWarning,
  alertDanger,
  alertDark,
  alertInfo,
  alertLight,
  close,
} from 'emotion-bootstrap';
import Fade, { FadeShape } from '../fade';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: FadeShape,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  color: 'primary',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

const colorMap = {
  primary: alertPrimary,
  secondary: alertSecondary,
  success: alertSuccess,
  warning: alertWarning,
  danger: alertDanger,
  dark: alertDark,
  info: alertInfo,
  light: alertLight,
};

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transition,
    fade,
    innerRef,
    ...attributes
  } = props;

  const classes = cx(className, alert, colorMap[color], {
    'alert-dismissible': toggle,
  });

  const closeClasses = cx(close, closeClassName);

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <Fade
      {...attributes}
      {...alertTransition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
      innerRef={innerRef}
    >
      {toggle ? (
        <button
          type="button"
          className={closeClasses}
          aria-label={closeAriaLabel}
          onClick={toggle}
        >
          <span aria-hidden="true">
&times;
          </span>
        </button>
      ) : null}
      {children}
    </Fade>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
