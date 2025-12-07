import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'UI/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Temperature: Story = {
  args: { label: 'Temperature', value: 0.7, min: 0, max: 1, onChange: () => {} },
};

export const Tokens: Story = {
  args: { label: 'Max Tokens', value: 1024, min: 100, max: 4000, onChange: () => {} },
};