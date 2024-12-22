import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './Toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockActions = [
  {
    id: 'clear',
    icon: '🗑️',
    label: 'Clear',
    onClick: () => console.log('Clear clicked'),
  },
  {
    id: 'copy',
    icon: '📋',
    label: 'Copy',
    onClick: () => console.log('Copy clicked'),
  },
  {
    id: 'settings',
    icon: '⚙️',
    label: 'Settings',
    onClick: () => console.log('Settings clicked'),
    isActive: true,
  },
  {
    id: 'disabled',
    icon: '❌',
    label: 'Disabled',
    onClick: () => console.log('Disabled clicked'),
    disabled: true,
  },
];

export const Primary: Story = {
  args: {
    title: 'Chat Controls',
    actions: mockActions,
    position: 'top',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Chat Controls',
    actions: mockActions,
    position: 'top',
    variant: 'secondary',
  },
};

export const Bottom: Story = {
  args: {
    title: 'Chat Controls',
    actions: mockActions,
    position: 'bottom',
    variant: 'primary',
  },
};

export const NoTitle: Story = {
  args: {
    actions: mockActions,
    position: 'top',
    variant: 'primary',
  },
};
