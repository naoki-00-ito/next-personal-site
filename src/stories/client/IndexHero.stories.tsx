import type { Meta, StoryObj } from '@storybook/react';

import indexHero from '@/components/client/IndexHero';

const meta = {
  title: 'Components/Client/indexHero',
  component: indexHero,
  // tags: ['autodocs'],
} satisfies Meta<typeof indexHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};

Sample.decorators = [
  (Story) => (
    <div style={{ paddingBottom: '50vh' }}>
      <Story />
    </div>
  ),
];
