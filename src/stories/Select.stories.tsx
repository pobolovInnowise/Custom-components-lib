// import React from 'react';
// import Select from '../Components/Select/Select';
//
// export default {
//     title: 'Components/Select',
//     component: Select,
//     argTypes: {
//         options: { control: 'array' }, // позволяет изменять массив опций через Storybook
//     },
// };
//
// const Template = (args) => <Select {...args} />;
//
// export const DefaultSelect = Template.bind({});
// DefaultSelect.args = {
//     options: ['summer', 'autumn', 'winter', 'spring'],
// };
import React from 'react';
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
