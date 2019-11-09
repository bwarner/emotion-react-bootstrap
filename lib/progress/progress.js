import PropTypes from 'prop-types';
import toNumber from 'lodash.tonumber';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
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
} from '@farvisionllc/emotion-bootstrap';

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

  const progressClasses = [className, progress];

  const progressBarClasses = [
    progressBar,
    bar ? className || barClassName : barClassName,
    {
      [progressBarAnimated]: animated,
      [bgColorMap[color]]: color,
      [progressBarStriped]: striped || animated,
    },
  ];

  const ProgressBar = multi ? (
    children
  ) : (
    <ClassNames>
      {({ cx }) => (
        <div
          className={cx(progressBarClasses)}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        >
          {children}
        </div>
      )}
    </ClassNames>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <ClassNames>
      {({ cx }) => (
        <Tag {...attributes} className={cx(progressClasses)}>
          {ProgressBar}
        </Tag>
      )}
    </ClassNames>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
