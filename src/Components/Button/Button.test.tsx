import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
    it('renders children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies variant and size classes', () => {
        render(<Button variant="outlined" size="large">Test</Button>);
        const btn = screen.getByRole('button');

        expect(btn).toHaveClass('buttonOutlined');
        expect(btn).toHaveClass('sizeLarge');
    });


    it('calls onClick when clicked', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();
        render(<Button onClick={handleClick}>Click</Button>);
        await user.click(screen.getByText('Click'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is passed', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();
        render(<Button disabled onClick={handleClick}>Disabled</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toBeDisabled();
        await user.click(btn);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
