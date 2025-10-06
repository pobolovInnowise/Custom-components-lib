
import { Meta, StoryObj } from '@storybook/react';
import TextField from '../Components/TextField/TextField';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {
        label: { control: 'text' },
        variant: {
            control: { type: 'radio' },
            options: ['outlined', 'filled', 'standard'] as const,
        },
        size: {
            control: { type: 'radio' },
            options: ['normal', 'small'] as const,
        },
        margin: {
            control: { type: 'radio' },
            options: ['none', 'dense', 'normal'] as const,
        },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        autoFocus: { control: 'boolean' },
        name: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
    args: {
        label: 'Enter text',
        variant: 'outlined',
        size: 'normal',
        margin: 'none',
        disabled: false,
        required: false,
        autoFocus: false,
        name: 'textfield1',
    },
};

export const SmallFilledTextField: Story = {
    args: {
        label: 'Small Filled',
        variant: 'filled',
        size: 'small',
        margin: 'dense',
        disabled: false,
        required: true,
        autoFocus: true,
        name: 'textfield2',
    },
};

export const DisabledTextField: Story = {
    args: {
        label: 'Disabled',
        variant: 'standard',
        size: 'normal',
        margin: 'normal',
        disabled: true,
        required: false,
        autoFocus: false,
        name: 'textfield3',
    },
};
