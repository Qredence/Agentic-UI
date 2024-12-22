import React from 'react';
import { theme } from '@agentic-ui/core';
import { Collapse } from '../Collapse';

export type AgentRole = 'user' | 'assistant' | 'system';

export interface AgentMessageProps {
  role: AgentRole;
  content: string | React.ReactNode;
  avatar?: string | React.ReactNode;
  timestamp?: string;
  reasoning?: {
    thoughts: string[];
    isExpanded?: boolean;
  };
  toolCalls?: Array<{
    tool: string;
    args: Record<string, unknown>;
    result?: string;
    isExpanded?: boolean;
  }>;
  onReasoningExpand?: () => void;
  onToolCallExpand?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AgentMessage: React.FC<AgentMessageProps> = ({
  role,
  content,
  avatar,
  timestamp,
  reasoning,
  toolCalls,
  onReasoningExpand,
  onToolCallExpand,
  className,
  style,
}) => {
  const messageStyles: React.CSSProperties = {
    display: 'flex',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.radius.lg,
    color: theme.colors.text.primary,
    ...style,
  };

  const avatarStyles: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const contentStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  };

  const expandableStyles: React.CSSProperties = {
    backgroundColor: theme.colors.background.tertiary,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.sm,
    cursor: 'pointer',
  };

  return (
    <div className={className} style={messageStyles}>
      <div style={avatarStyles}>
        {typeof avatar === 'string' ? (
          <img src={avatar} alt={`${role} avatar`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        ) : (
          avatar || role.charAt(0).toUpperCase()
        )}
      </div>
      
      <div style={contentStyles}>
        <div style={{ fontSize: theme.typography.sm, color: theme.colors.text.secondary }}>
          {role.charAt(0).toUpperCase() + role.slice(1)}
          {timestamp && (
            <span style={{ marginLeft: theme.spacing.sm }}>
              {timestamp}
            </span>
          )}
        </div>
        
        <div style={{ fontSize: theme.typography.md }}>
          {content}
        </div>

        {reasoning && (
          <div
            style={expandableStyles}
            onClick={onReasoningExpand}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span>Reasoning</span>
              <span>{reasoning.isExpanded ? '▼' : '▶'}</span>
            </div>
            <Collapse isOpen={reasoning.isExpanded || false}>
              <div style={{ color: theme.colors.text.secondary, marginTop: theme.spacing.sm }}>
                {reasoning.thoughts.map((thought, index) => (
                  <div key={index} style={{ marginBottom: theme.spacing.sm }}>
                    {thought}
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        )}

        {toolCalls?.map((toolCall, index) => (
          <div
            key={index}
            style={expandableStyles}
            onClick={() => onToolCallExpand?.(index)}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span>{toolCall.tool}</span>
              <span>{toolCall.isExpanded ? '▼' : '▶'}</span>
            </div>
            <Collapse isOpen={toolCall.isExpanded || false}>
              <div style={{ color: theme.colors.text.secondary, marginTop: theme.spacing.sm }}>
                <pre style={{ 
                  fontFamily: 'monospace',
                  fontSize: theme.typography.sm,
                  overflow: 'auto',
                  padding: theme.spacing.sm,
                  backgroundColor: theme.colors.background.primary,
                  borderRadius: theme.radius.sm,
                  margin: `${theme.spacing.sm} 0`
                }}>
                  {JSON.stringify(toolCall.args, null, 2)}
                </pre>
                {toolCall.result && (
                  <pre style={{ 
                    fontFamily: 'monospace',
                    fontSize: theme.typography.sm,
                    overflow: 'auto',
                    padding: theme.spacing.sm,
                    backgroundColor: theme.colors.background.primary,
                    borderRadius: theme.radius.sm
                  }}>
                    {toolCall.result}
                  </pre>
                )}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};
