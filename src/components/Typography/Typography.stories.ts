import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Typography from './Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'test',
    variant: 'body1',
  },
};
