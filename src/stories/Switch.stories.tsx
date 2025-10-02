import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Switch from '../Components/Switch/Switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        name: { control: 'text' },
        value: { control: 'text' },
        id: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
    args: {
        checked: false,
        disabled: false,
        name: 'switch1',
        value: 'value1',
        id: 'switch1',
    },
};

export const CheckedSwitch: Story = {
    args: {
        checked: true,
        disabled: false,
        name: 'switch2',
        value: 'value2',
        id: 'switch2',
    },
};

export const DisabledSwitch: Story = {
    args: {
        checked: false,
        disabled: true,
        name: 'switch3',
        value: 'value3',
        id: 'switch3',
    },
};
