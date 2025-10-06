import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
    it('renders without crashing', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('renders as checked when checked prop is true', () => {
        render(<Checkbox checked={true} />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it('renders as unchecked when checked prop is false', () => {
        render(<Checkbox checked={false} />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(false);
    });

    it('renders as disabled when disabled prop is true', () => {
        render(<Checkbox disabled={true} />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.disabled).toBe(true);
    });

    it('calls onChange handler when clicked', () => {
        const handleChange = jest.fn();
        render(<Checkbox onChange={handleChange} />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('accepts name, id and value props', () => {
        render(<Checkbox name="testName" id="testId" value="testValue" />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.name).toBe('testName');
        expect(checkbox.id).toBe('testId');
        expect(checkbox.value).toBe('testValue');
    });
});
