import React from 'react';
import PropTypes from 'prop-types';
import toNumber from 'lodash.tonumber';
import { cx } from 'emotion';
import {
  progress,
  progressBar,
  progressBarAnimated,
  progressBarStriped,
  bgDanger,
  bgDark,
  bgInfo,
  bgLight,
  bgPrimary,
  bgSecondary,
  bgSuccess,
  bgTransparent,
  bgWarning,
  bgWhite,
} from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

const propTypes = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
};

const bgColorMap = {
  danger: bgDanger,
  dark: bgDark,
  info: bgInfo,
  light: bgLight,
  primary: bgPrimary,
  secondary: bgSecondary,
  success: bgSuccess,
  transparent: bgTransparent,
  warning: bgWarning,
  white: bgWhite,
};

const Progress = (props) => {
  const {
    children,
    className,
    barClassName,
    value,
    max,
    animated,
    striped,
    color,
    bar,
    multi,
    tag: Tag,
    ...attributes
  } = props;

  const percent = (toNumber(value) / toNumber(max)) * 100;

  const progressClasses = cx(className, progress);

  const progressBarClasses = cx(
    progressBar,
    bar ? className || barClassName : barClassName,
    animated ? progressBarAnimated : null,
    color ? bgColorMap[color] : null,
    striped || animated ? progressBarStriped : null,
  );

  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      {children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attributes} className={progressClasses}>
      {ProgressBar}
    </Tag>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
