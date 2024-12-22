import { colors } from './colors';
import { typography } from './typography';
import { layout } from './layout';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';

export const theme = {
  colors,
  ...typography,
  ...layout,
  ...spacing,
  ...radius,
  ...shadows,
} as const;

export type Theme = typeof theme;

export * from './colors';
export * from './typography';
export * from './layout';
export * from './spacing';
export * from './radius';
export * from './shadows';
