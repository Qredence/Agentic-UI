import type { Meta, StoryObj } from '@storybook/react';
import { SettingsPanel } from './SettingsPanel';
import { useState } from 'react';

const meta = {
  title: 'Components/SettingsPanel',
  component: SettingsPanel,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SettingsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockGroups = [
  {
    id: 'appearance',
    title: 'Appearance',
    description: 'Customize how the application looks',
    options: [
      {
        id: 'theme',
        label: 'Theme',
        type: 'select' as const,
        value: 'dark',
        options: [
          { label: 'Dark', value: 'dark' },
          { label: 'Light', value: 'light' },
          { label: 'System', value: 'system' },
        ],
        description: 'Choose your preferred color theme',
      },
      {
        id: 'fontSize',
        label: 'Font Size',
        type: 'select' as const,
        value: 'medium',
        options: [
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
        ],
        description: 'Adjust the size of text throughout the application',
      },
    ],
  },
  {
    id: 'behavior',
    title: 'Behavior',
    description: 'Configure how the application behaves',
    options: [
      {
        id: 'autoSave',
        label: 'Auto-save',
        type: 'toggle' as const,
        value: true,
        description: 'Automatically save changes as you work',
      },
      {
        id: 'notifications',
        label: 'Enable Notifications',
        type: 'toggle' as const,
        value: false,
        description: 'Receive notifications about important updates',
      },
    ],
  },
  {
    id: 'account',
    title: 'Account',
    options: [
      {
        id: 'name',
        label: 'Display Name',
        type: 'input' as const,
        value: 'John Doe',
        description: 'Your name as shown to other users',
      },
      {
        id: 'logout',
        label: 'Log Out',
        type: 'button' as const,
        onClick: () => alert('Logging out...'),
      },
    ],
  },
];

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [groups, setGroups] = useState(mockGroups);

    const handleOptionChange = (groupId: string, optionId: string, value: any) => {
      setGroups(groups.map(group => {
        if (group.id === groupId) {
          return {
            ...group,
            options: group.options.map(option => {
              if (option.id === optionId) {
                return {
                  ...option,
                  value,
                };
              }
              return option;
            }),
          };
        }
        return group;
      }));
    };

    const enhancedGroups = groups.map(group => ({
      ...group,
      options: group.options.map(option => ({
        ...option,
        onChange: (value: any) => handleOptionChange(group.id, option.id, value),
      })),
    }));

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Settings</button>
        <SettingsPanel
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          groups={enhancedGroups}
        />
      </div>
    );
  },
};

export const LeftPosition: Story = {
  args: {
    isOpen: true,
    groups: mockGroups,
    position: 'left',
  },
};

export const CustomWidth: Story = {
  args: {
    isOpen: true,
    groups: mockGroups,
    width: '600px',
  },
};
