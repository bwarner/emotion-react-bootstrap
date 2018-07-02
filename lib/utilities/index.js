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
