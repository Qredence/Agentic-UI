import React from 'react';
import { theme } from '@agentic-ui/core';
import { AgentMessage, AgentMessageProps } from '../AgentMessage';
import { TracingPanel, TraceStep } from '../TracingPanel';

export interface AgentConversationProps {
  messages: AgentMessageProps[];
  traceSteps?: TraceStep[];
  onMessageSubmit?: (message: string) => void;
  onReasoningExpand?: (messageIndex: number) => void;
  onToolCallExpand?: (messageIndex: number, toolCallIndex: number) => void;
  onTraceStepExpand?: (stepId: string) => void;
  showTracing?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const AgentConversation: React.FC<AgentConversationProps> = ({
  messages,
  traceSteps = [],
  onMessageSubmit,
  onReasoningExpand,
  onToolCallExpand,
  onTraceStepExpand,
  showTracing = true,
  className,
  style,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    backgroundColor: theme.colors.background.primary,
    color: theme.colors.text.primary,
    ...style,
  };

  const chatContainerStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0, // Prevents flex child from overflowing
  };

  const messagesContainerStyles: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: theme.spacing[4],
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing[4],
  };

  const inputContainerStyles: React.CSSProperties = {
    padding: theme.spacing[4],
    borderTop: `1px solid ${theme.colors.border.default}`,
    backgroundColor: theme.colors.background.secondary,
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: theme.spacing[3],
    backgroundColor: theme.colors.background.tertiary,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: theme.radius.lg,
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.md,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onMessageSubmit) {
      onMessageSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className={className} style={containerStyles}>
      <div style={chatContainerStyles}>
        <div style={messagesContainerStyles}>
          {messages.map((message, index) => (
            <AgentMessage
              key={index}
              {...message}
              onReasoningExpand={() => onReasoningExpand?.(index)}
              onToolCallExpand={(toolIndex) => onToolCallExpand?.(index, toolIndex)}
            />
          ))}
        </div>
        
        <form style={inputContainerStyles} onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            style={inputStyles}
          />
        </form>
      </div>

      {showTracing && traceSteps.length > 0 && (
        <TracingPanel
          steps={traceSteps}
          onStepExpand={onTraceStepExpand}
        />
      )}
    </div>
  );
};
