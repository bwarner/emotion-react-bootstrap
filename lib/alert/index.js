import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
} from 'emotion-bootstrap';

const propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'primary',
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

export default class Alert extends Component {
  render() {
    const { className, color, children } = this.props;

    const classes = cx(alert, className, colorMap[color]);

    return (
      <div className={classes}>
        <div>{children}</div>
      </div>
    );
  }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
