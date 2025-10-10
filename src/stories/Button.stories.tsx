import { Meta, StoryObj } from '@storybook/react';
import Button from '../Components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['text', 'contained', 'outlined'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  args: {
    variant: 'text',
    size: 'small',
    disabled: false,
    children: 'small',
  },
};

export const ContainedButton: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    disabled: false,
    children: 'medium',
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: 'outlined',
    size: 'large',
    disabled: false,
    children: 'large',
  },
};
