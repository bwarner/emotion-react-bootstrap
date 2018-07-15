import {
  badgeDanger,
  badgeDark,
  badgeInfo,
  badgeLight,
  badgePrimary,
  badgeSecondary,
  badgeSuccess,
  badgeWarning,
  btnDanger,
  btnDark,
  btnInfo,
  btnLight,
  btnOutlineDanger,
  btnOutlineDark,
  btnOutlineInfo,
  btnOutlineLight,
  btnOutlinePrimary,
  btnOutlineSecondary,
  btnOutlineSuccess,
  btnOutlineWarning,
  btnPrimary,
  btnSecondary,
  btnSuccess,
  btnWarning,
  btnGroupSm,
  btnGroupLg,
  textDanger,
  textDark,
  textInfo,
  textLight,
  textMuted,
  textPrimary,
  textSecondary,
  textSuccess,
  textWarning,
  textWhite,
} from 'emotion-bootstrap';

export { default as keyCodes } from './key-codes';

export const textColors = {
  primary: textPrimary,

  secondary: textSecondary,

  success: textSuccess,

  danger: textDanger,

  warning: textWarning,

  info: textInfo,

  light: textLight,

  dark: textDark,

  muted: textMuted,

  white: textWhite,
};

export function textColor(name) {
  return textColors[name];
}

export const badgeColors = {
  primary: badgePrimary,

  secondary: badgeSecondary,

  success: badgeSuccess,

  danger: badgeDanger,

  warning: badgeWarning,

  info: badgeInfo,

  light: badgeLight,

  dark: badgeDark,
};

export function badgeColor(name) {
  return badgeColors[name];
}

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
export const TransitionTimeouts = {
  Fade:     150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal:    300, // $modal-transition
  Carousel: 600, // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
export const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
];

const buttonMap = {
  primary:   btnPrimary,
  secondary: btnSecondary,
  success:   btnSuccess,
  danger:    btnDanger,
  warning:   btnWarning,
  info:      btnInfo,
  light:     btnLight,
  dark:      btnDark,
};
const buttonOutlineMap = {
  primary:   btnOutlinePrimary,
  secondary: btnOutlineSecondary,
  success:   btnOutlineSuccess,
  danger:    btnOutlineDanger,
  warning:   btnOutlineWarning,
  info:      btnOutlineInfo,
  light:     btnOutlineLight,
  dark:      btnOutlineDark,
};

export function buttonColor(name) {
  return buttonMap[name];
}

export function buttonOutlineColor(name) {
  return buttonOutlineMap[name];
}

const btnGroupSizeMap = {
  sm: btnGroupSm,
  lg: btnGroupLg,
};

export function btnGroupSize(name) {
  return btnGroupSizeMap[name];
}

const warned = {};

export function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}
