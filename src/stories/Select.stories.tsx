import { Meta, StoryObj } from '@storybook/react';
import Select from '../Components/Select/Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        options: {
            control: { type: 'object' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
    args: {
        options: ['summer', 'autumn', 'winter', 'spring'],
    },
};
