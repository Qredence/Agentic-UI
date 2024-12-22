import type { Meta, StoryObj } from '@storybook/react';
import { AgentMessage } from './AgentMessage';

const meta = {
  title: 'Components/AgentMessage',
  component: AgentMessage,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AgentMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    role: 'user',
    content: 'Can you help me build a React component?',
    timestamp: '12:34 PM',
  },
};

export const Assistant: Story = {
  args: {
    role: 'assistant',
    content: 'I can help you build a React component. Let me break down the process.',
    timestamp: '12:35 PM',
    reasoning: {
      thoughts: [
        'First, we need to understand the requirements',
        'Then, we can plan the component structure',
        'Finally, we can implement the component with proper TypeScript types',
      ],
      isExpanded: true,
    },
    toolCalls: [
      {
        tool: 'codebase_search',
        args: {
          query: 'React component example',
          paths: ['/src'],
        },
        result: 'Found 3 examples...',
        isExpanded: true,
      },
    ],
  },
};

export const System: Story = {
  args: {
    role: 'system',
    content: 'Running tests...',
    timestamp: '12:36 PM',
  },
};

export const WithCustomAvatar: Story = {
  args: {
    role: 'assistant',
    content: 'Hello! How can I help you today?',
    timestamp: '12:37 PM',
    avatar: '🤖',
  },
};
