import {
  textPrimary,
  textSecondary,
  textSuccess,
  textDanger,
  textWarning,
  textInfo,
  textLight,
  textDark,
  textMuted,
  textWhite,
  badgePrimary,
  badgeSecondary,
  badgeSuccess,
  badgeDanger,
  badgeWarning,
  badgeInfo,
  badgeLight,
  badgeDark,
  badgeMuted,
  badgeWhite,
} from 'emotion-bootstrap';

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

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let { length } = pickKeys;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
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
