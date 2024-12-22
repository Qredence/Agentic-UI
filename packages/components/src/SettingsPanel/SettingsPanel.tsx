import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '@agentic-ui/core';
import { drawer, transition } from '../utils/animations';

export interface SettingsOption {
  id: string;
  label: string;
  type: 'toggle' | 'select' | 'input' | 'button';
  value?: boolean | string | number;
  options?: Array<{ label: string; value: string }>;
  onChange?: (value: any) => void;
  onClick?: () => void;
  description?: string;
}

export interface SettingsGroup {
  id: string;
  title: string;
  description?: string;
  options: SettingsOption[];
}

export interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  groups: SettingsGroup[];
  position?: 'left' | 'right';
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  groups,
  position = 'right',
  width = '400px',
  className,
  style,
}) => {
  const containerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    [position]: 0,
    width,
    height: '100vh',
    backgroundColor: theme.colors.background.secondary,
    borderLeft: position === 'right' ? `1px solid ${theme.colors.border.default}` : undefined,
    borderRight: position === 'left' ? `1px solid ${theme.colors.border.default}` : undefined,
    zIndex: 1000,
    ...style,
  };

  const headerStyles: React.CSSProperties = {
    padding: theme.spacing[4],
    borderBottom: `1px solid ${theme.colors.border.default}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const contentStyles: React.CSSProperties = {
    padding: theme.spacing[4],
    height: 'calc(100vh - 64px)', // Header height
    overflowY: 'auto',
  };

  const groupStyles: React.CSSProperties = {
    marginBottom: theme.spacing[6],
  };

  const optionStyles: React.CSSProperties = {
    marginBottom: theme.spacing[4],
  };

  const renderOption = (option: SettingsOption) => {
    const baseInputStyles: React.CSSProperties = {
      backgroundColor: theme.colors.background.tertiary,
      border: `1px solid ${theme.colors.border.default}`,
      borderRadius: theme.radius.md,
      padding: theme.spacing[2],
      color: theme.colors.text.primary,
      width: '100%',
      fontSize: theme.fontSizes.sm,
    };

    switch (option.type) {
      case 'toggle':
        return (
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={option.value as boolean}
              onChange={(e) => option.onChange?.(e.target.checked)}
              style={{ marginRight: theme.spacing[2] }}
            />
            <span>{option.label}</span>
          </label>
        );
      case 'select':
        return (
          <div>
            <label style={{ display: 'block', marginBottom: theme.spacing[2] }}>
              {option.label}
            </label>
            <select
              value={option.value as string}
              onChange={(e) => option.onChange?.(e.target.value)}
              style={baseInputStyles}
            >
              {option.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
      case 'input':
        return (
          <div>
            <label style={{ display: 'block', marginBottom: theme.spacing[2] }}>
              {option.label}
            </label>
            <input
              type="text"
              value={option.value as string}
              onChange={(e) => option.onChange?.(e.target.value)}
              style={baseInputStyles}
            />
          </div>
        );
      case 'button':
        return (
          <button
            onClick={option.onClick}
            style={{
              backgroundColor: theme.colors.brand[500],
              color: theme.colors.white,
              border: 'none',
              borderRadius: theme.radius.md,
              padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
              cursor: 'pointer',
              width: '100%',
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.medium,
            }}
          >
            {option.label}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: theme.colors.black,
              zIndex: 999,
            }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className={className}
            style={containerStyles}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={drawer}
            custom={position}
            transition={transition}
          >
            <div style={headerStyles}>
              <h2 style={{ 
                fontSize: theme.fontSizes.xl,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.text.primary,
              }}>
                Settings
              </h2>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: theme.colors.text.secondary,
                  cursor: 'pointer',
                  fontSize: theme.fontSizes.xl,
                }}
              >
                ×
              </button>
            </div>

            <div style={contentStyles}>
              {groups.map((group) => (
                <div key={group.id} style={groupStyles}>
                  <h3 style={{ 
                    fontSize: theme.fontSizes.lg,
                    fontWeight: theme.fontWeights.medium,
                    marginBottom: theme.spacing[2],
                    color: theme.colors.text.primary,
                  }}>
                    {group.title}
                  </h3>
                  {group.description && (
                    <p style={{ 
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.text.secondary,
                      marginBottom: theme.spacing[4],
                    }}>
                      {group.description}
                    </p>
                  )}
                  {group.options.map((option) => (
                    <div key={option.id} style={optionStyles}>
                      {renderOption(option)}
                      {option.description && (
                        <p style={{ 
                          fontSize: theme.fontSizes.xs,
                          color: theme.colors.text.tertiary,
                          marginTop: theme.spacing[1],
                        }}>
                          {option.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
