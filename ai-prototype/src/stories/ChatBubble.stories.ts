import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from './ChatBubble';

const meta = {
  title: 'UI/ChatBubble',
  component: ChatBubble,
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: { message: 'Write a poem about React.', role: 'user' },
};

export const AIResponse: Story = {
  args: { message: 'React is a library, strictly for the view...', role: 'ai' },
};