import type { Meta, StoryObj } from '@storybook/react';
import { TracingPanel } from './TracingPanel';

const meta = {
  title: 'Components/TracingPanel',
  component: TracingPanel,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TracingPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSteps = [
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
  {
    id: '3',
    type: 'observation' as const,
    content: 'Component successfully created with all required features',
    timestamp: '12:36 PM',
  },
];

export const Default: Story = {
  args: {
    title: 'Tracing',
    steps: mockSteps,
  },
};

export const CustomWidth: Story = {
  args: {
    title: 'Tracing',
    steps: mockSteps,
    width: '400px',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Agent Thoughts',
    steps: mockSteps,
  },
};
