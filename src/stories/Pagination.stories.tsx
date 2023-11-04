import type { Meta, StoryObj } from '@storybook/react';

import Pagination from '@/components/Pagination';

// 最大ページ数
const maxPages = 10;

// pages用配列作成
const maxPagesArray = [];
for (let i = 1; i <= maxPages; i++) {
  maxPagesArray.push(i);
}

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    pages: maxPagesArray,
    currentPage: 1,
  },
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
        min: 1,
        max: maxPages,
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    currentPage: 1,
  },
};
