import React from 'react';
import { theme } from '@agentic-ui/core';
import { Collapse } from '../Collapse';

export interface TraceStep {
  id: string;
  type: 'thought' | 'action' | 'observation';
  content: string;
  timestamp?: string;
  children?: TraceStep[];
  isExpanded?: boolean;
}

export interface TracingPanelProps {
  title?: string;
  steps: TraceStep[];
  width?: string | number;
  onStepExpand?: (stepId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TraceStepComponent: React.FC<{
  step: TraceStep;
  depth?: number;
  onExpand?: (stepId: string) => void;
}> = ({ step, depth = 0, onExpand }) => {
  const getTypeColor = (type: TraceStep['type']) => {
    switch (type) {
      case 'thought':
        return theme.colors.brand[400];
      case 'action':
        return theme.colors.semantic.success.base;
      case 'observation':
        return theme.colors.semantic.info.base;
      default:
        return theme.colors.text.primary;
    }
  };

  const stepStyles: React.CSSProperties = {
    padding: theme.spacing[3],
    paddingLeft: `calc(${theme.spacing[3]} + ${depth * 20}px)`,
    borderLeft: step.children?.length 
      ? `2px solid ${theme.colors.border.default}`
      : 'none',
    position: 'relative',
  };

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[2],
    color: getTypeColor(step.type),
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.medium,
    cursor: step.children?.length ? 'pointer' : 'default',
  };

  const contentStyles: React.CSSProperties = {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing[2],
    lineHeight: theme.lineHeights.relaxed,
  };

  const timestampStyles: React.CSSProperties = {
    color: theme.colors.text.tertiary,
    fontSize: theme.fontSizes.xs,
    marginLeft: 'auto',
  };

  return (
    <div style={stepStyles}>
      <div 
        style={headerStyles}
        onClick={() => step.children?.length && onExpand?.(step.id)}
      >
        <span style={{ opacity: 0.7 }}>
          {step.children?.length ? (step.isExpanded ? '▼' : '▶') : '•'}
        </span>
        <span style={{ textTransform: 'capitalize' }}>{step.type}</span>
        {step.timestamp && (
          <span style={timestampStyles}>{step.timestamp}</span>
        )}
      </div>
      
      <div style={contentStyles}>
        {step.content}
      </div>

      <Collapse isOpen={step.isExpanded || false}>
        {step.children?.map((childStep) => (
          <TraceStepComponent
            key={childStep.id}
            step={childStep}
            depth={depth + 1}
            onExpand={onExpand}
          />
        ))}
      </Collapse>
    </div>
  );
};

export const TracingPanel: React.FC<TracingPanelProps> = ({
  title = 'Tracing',
  steps,
  width = '320px',
  onStepExpand,
  className,
  style,
}) => {
  const containerStyles: React.CSSProperties = {
    width,
    height: '100%',
    backgroundColor: theme.colors.background.secondary,
    borderLeft: `1px solid ${theme.colors.border.default}`,
    display: 'flex',
    flexDirection: 'column',
    ...style,
  };

  const headerStyles: React.CSSProperties = {
    padding: theme.spacing[4],
    borderBottom: `1px solid ${theme.colors.border.default}`,
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semibold,
  };

  const contentStyles: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
  };

  return (
    <div className={className} style={containerStyles}>
      <div style={headerStyles}>
        {title}
      </div>
      <div style={contentStyles}>
        {steps.map((step) => (
          <TraceStepComponent
            key={step.id}
            step={step}
            onExpand={onStepExpand}
          />
        ))}
      </div>
    </div>
  );
};
