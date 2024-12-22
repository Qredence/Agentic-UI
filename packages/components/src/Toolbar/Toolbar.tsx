import React from 'react';
import { theme } from '@agentic-ui/core';

export interface ToolbarAction {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export interface ToolbarProps {
  title?: string;
  actions?: ToolbarAction[];
  position?: 'top' | 'bottom';
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  title,
  actions = [],
  position = 'top',
  variant = 'primary',
  className,
  style,
}) => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[4],
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    backgroundColor: 
      variant === 'primary' 
        ? theme.colors.background.secondary
        : theme.colors.background.tertiary,
    borderBottom: position === 'top' ? `1px solid ${theme.colors.border.default}` : undefined,
    borderTop: position === 'bottom' ? `1px solid ${theme.colors.border.default}` : undefined,
    height: '48px',
    ...style,
  };

  const titleStyles: React.CSSProperties = {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.medium,
    marginRight: 'auto',
  };

  const actionGroupStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[1],
  };

  const getActionStyles = (action: ToolbarAction): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[2],
    padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
    color: action.isActive ? theme.colors.brand[400] : theme.colors.text.secondary,
    backgroundColor: action.isActive 
      ? theme.colors.background.elevated
      : 'transparent',
    border: 'none',
    borderRadius: theme.radius.md,
    fontSize: theme.fontSizes.sm,
    cursor: action.disabled ? 'not-allowed' : 'pointer',
    opacity: action.disabled ? 0.5 : 1,
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: !action.disabled && theme.colors.background.elevated,
      color: !action.disabled && theme.colors.text.primary,
    },
  });

  return (
    <div className={className} style={containerStyles}>
      {title && <div style={titleStyles}>{title}</div>}
      
      <div style={actionGroupStyles}>
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            disabled={action.disabled}
            style={getActionStyles(action)}
            title={action.label}
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
