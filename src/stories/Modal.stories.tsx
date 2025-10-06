import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../Components/Modal/Modal';
import Button from '../Components/Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        open: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
    render: (args) => {
        const [open, setOpen] = useState(args.open ?? false);

        return (
            <div>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Открыть модалку
                </Button>

                <Modal open={open} handleClose={() => setOpen(false)}>
                    <h2>Пример модального окна</h2>
                    <p>Это контент модалки, которую можно закрыть кнопкой.</p>
                </Modal>
            </div>
        );
    },
    args: {
        open: false,
    },
};
