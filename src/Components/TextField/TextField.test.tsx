import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField component', () => {
    it('renders without crashing', () => {
        render(<TextField />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('renders with label as placeholder', () => {
        render(<TextField label="My Label" />);
        const input = screen.getByPlaceholderText('My Label');
        expect(input).toBeInTheDocument();
    });

    it('applies disabled, required and name props', () => {
        render(
            <TextField
                disabled
                required
                name="testName"
            />
        );
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.disabled).toBe(true);
        expect(input.required).toBe(true);
        expect(input.name).toBe('testName');
    });


    it('calls onChange handler when value changes', () => {
        const handleChange = jest.fn();
        render(<TextField onChange={handleChange} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
