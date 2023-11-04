import type { Meta, StoryObj } from '@storybook/react';

import AlticleList from '@/components/AlticleList';

const testArticle = {
  slug: 'slug',
  frontmatter: {
    title: 'titletitletitletitletitletitle',
    description: 'descriptiondescriptiondescriptiondescriptiondescription',
    category: ['category'],
    tags: ['tag1', 'tag2'],
    date: '2023-01-01',
  },
};

const testArticles = Array(5).fill(testArticle);

const meta = {
  title: 'Components/AlticleList',
  component: AlticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof AlticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    articles: testArticles,
  },
};
