import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  spacing,
  typography,
} as const;

// Type para usar con useTheme
export type Theme = typeof theme;