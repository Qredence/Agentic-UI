export const typography = {
  fonts: {
    base: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'Fira Code, Consolas, Monaco, "Andale Mono", monospace',
  },

  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    h1: '24px',
    h2: '20px',
    h3: '18px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    base: 1.4,
    relaxed: 1.6,
  },

  letterSpacings: {
    tight: '-0.01em',
    normal: '0',
    wide: '0.01em',
  },
} as const;

export type Typography = typeof typography;
