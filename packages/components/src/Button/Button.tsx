import React from 'react';
import { theme } from '@agentic-ui/core';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof theme.components.Button.variants;
  size?: keyof typeof theme.components.Button.sizes;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyle = theme.components.Button.variants[variant];
    const sizeStyle = theme.components.Button.sizes[size];

    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius.base,
      fontWeight: theme.fontWeights.medium,
      transition: 'all 0.2s',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: disabled || isLoading ? 0.6 : 1,
      gap: theme.spacing[2],
      ...variantStyle,
      ...sizeStyle,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={baseStyles}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {isLoading ? 'Loading...' : children}
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);
