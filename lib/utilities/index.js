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
