import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        name: { control: 'text' },
        value: { control: 'text' },
        id: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
    args: {
        checked: false,
        disabled: false,
        name: 'checkbox1',
        value: 'value1',
        id: 'checkbox1',
    },
};

export const CheckedCheckbox: Story = {
    args: {
        checked: true,
        disabled: false,
        name: 'checkbox2',
        value: 'value2',
        id: 'checkbox2',
    },
};

export const DisabledCheckbox: Story = {
    args: {
        checked: false,
        disabled: true,
        name: 'checkbox3',
        value: 'value3',
        id: 'checkbox3',
    },
};
