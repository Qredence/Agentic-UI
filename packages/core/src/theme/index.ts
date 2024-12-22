import { colors, typography, spacing, radius, shadows } from '../tokens';

export const theme = {
  colors,
  ...typography,
  spacing,
  radius,
  shadows,
  
  // Component-specific theme configurations can be added here
  components: {
    Button: {
      variants: {
        primary: {
          backgroundColor: colors.primary[500],
          color: colors.white,
          _hover: {
            backgroundColor: colors.primary[600],
          },
        },
        secondary: {
          backgroundColor: colors.neutral[200],
          color: colors.neutral[900],
          _hover: {
            backgroundColor: colors.neutral[300],
          },
        },
      },
      sizes: {
        sm: {
          fontSize: typography.fontSizes.sm,
          padding: `${spacing[2]} ${spacing[3]}`,
        },
        md: {
          fontSize: typography.fontSizes.md,
          padding: `${spacing[2.5]} ${spacing[4]}`,
        },
        lg: {
          fontSize: typography.fontSizes.lg,
          padding: `${spacing[3]} ${spacing[5]}`,
        },
      },
    },
    Input: {
      variants: {
        outline: {
          borderColor: colors.neutral[200],
          _hover: {
            borderColor: colors.neutral[300],
          },
          _focus: {
            borderColor: colors.primary[500],
            boxShadow: `0 0 0 1px ${colors.primary[500]}`,
          },
        },
      },
      sizes: {
        sm: {
          fontSize: typography.fontSizes.sm,
          padding: spacing[2],
        },
        md: {
          fontSize: typography.fontSizes.md,
          padding: spacing[3],
        },
        lg: {
          fontSize: typography.fontSizes.lg,
          padding: spacing[4],
        },
      },
    },
  },
} as const;

export type Theme = typeof theme;
