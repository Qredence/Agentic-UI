import type { Meta, StoryObj } from '@storybook/react';
import { AgentConversation } from './AgentConversation';

const meta = {
  title: 'Components/AgentConversation',
  component: AgentConversation,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AgentConversation>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMessages = [
  {
    role: 'user' as const,
    content: 'Can you help me create a React component?',
    timestamp: '12:34 PM',
  },
  {
    role: 'assistant' as const,
    content: 'I\'ll help you create a React component. Let\'s break down the process.',
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
];

const mockTraceSteps = [
  {
    id: '1',
    type: 'thought' as const,
    content: 'Analyzing the user request to create a React component',
    timestamp: '12:34 PM',
    isExpanded: true,
    children: [
      {
        id: '1.1',
        type: 'observation' as const,
        content: 'The request requires TypeScript support',
        timestamp: '12:34 PM',
      },
      {
        id: '1.2',
        type: 'thought' as const,
        content: 'Need to include proper type definitions',
        timestamp: '12:34 PM',
      },
    ],
  },
  {
    id: '2',
    type: 'action' as const,
    content: 'Creating component structure',
    timestamp: '12:35 PM',
    isExpanded: true,
    children: [
      {
        id: '2.1',
        type: 'action' as const,
        content: 'Setting up props interface',
        timestamp: '12:35 PM',
      },
      {
        id: '2.2',
        type: 'action' as const,
        content: 'Implementing component logic',
        timestamp: '12:35 PM',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    messages: mockMessages,
    traceSteps: mockTraceSteps,
  },
};

export const WithoutTracing: Story = {
  args: {
    messages: mockMessages,
    showTracing: false,
  },
};
