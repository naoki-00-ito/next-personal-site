import type { Meta, StoryObj } from '@storybook/react';

import TipList from '@/components/server/TipList';

const meta = {
  title: 'Components/Server/TipList',
  component: TipList,
  tags: ['autodocs'],
} satisfies Meta<typeof TipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    items: ['text', 'text', 'text'],
  },
};
