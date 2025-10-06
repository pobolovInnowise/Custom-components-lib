
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
    it('не рендерится, если open = false', () => {
        const { container } = render(
            <Modal open={false} handleClose={() => {}}>
                <p>Hidden modal</p>
            </Modal>
        );

        expect(container.firstChild).toBeNull();
    });

    it('рендерится, если open = true', () => {
        render(
            <Modal open={true} handleClose={() => {}}>
                <p>Visible modal</p>
            </Modal>
        );

        expect(screen.getByText('Visible modal')).toBeInTheDocument();
    });

    it('вызвает handleClose при клике на overlay', () => {
        const handleClose = jest.fn();
        render(
            <Modal open={true} handleClose={handleClose}>
                <p>Modal content</p>
            </Modal>
        );

        const overlay = screen.getByText('Close').parentElement?.parentElement;
        if (overlay) fireEvent.click(overlay);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('не вызывает handleClose при клике внутри контента', () => {
        const handleClose = jest.fn();
        render(
            <Modal open={true} handleClose={handleClose}>
                <p>Modal content</p>
            </Modal>
        );

        const content = screen.getByText('Modal content');
        fireEvent.click(content);

        expect(handleClose).not.toHaveBeenCalled();
    });

    it('закрывается по кнопке "Close"', () => {
        const handleClose = jest.fn();
        render(
            <Modal open={true} handleClose={handleClose}>
                <p>Some content</p>
            </Modal>
        );

        const button = screen.getByText('Close');
        fireEvent.click(button);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
