import type { Meta, StoryObj } from '@storybook/react';

import TipList from '@/components/TipList';

const meta = {
  title: 'Components/TipList',
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
