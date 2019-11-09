import PropTypes from 'prop-types';
/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
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
  active,
} from '@farvisionllc/emotion-bootstrap';
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

  const classes = [
    className,
    alert,
    colorMap[color],
    {
      'alert-dismissible': toggle,
    },
  ];

  const closeClasses = [close, closeClassName];

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <ClassNames>
      {({ cx }) => (
        <Fade
          {...attributes}
          {...alertTransition}
          tag={Tag}
          className={cx(classes)}
          in={isOpen}
          role="alert"
          innerRef={innerRef}
        >
          {toggle ? (
            <button
              type="button"
              className={cx(closeClasses)}
              aria-label={closeAriaLabel}
              onClick={toggle}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          ) : null}
          {children}
        </Fade>
      )}
    </ClassNames>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
