import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch component', () => {
  it('renders without crashing', () => {
    render(<Switch />);
    const sw = screen.getByRole('switch');
    expect(sw).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Switch checked={true} onChange={() => {}} />);
    const sw = screen.getByRole('switch') as HTMLInputElement;
    expect(sw.checked).toBe(true);
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Switch checked={false} onChange={() => {}} />);
    const sw = screen.getByRole('switch') as HTMLInputElement;
    expect(sw.checked).toBe(false);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Switch disabled={true} />);
    const sw = screen.getByRole('switch') as HTMLInputElement;
    expect(sw.disabled).toBe(true);
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} />);
    const sw = screen.getByRole('switch') as HTMLInputElement;

    fireEvent.click(sw);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('accepts name, id and value props', () => {
    render(<Switch name="testName" id="testId" value="testValue" />);
    const sw = screen.getByRole('switch') as HTMLInputElement;
    expect(sw.name).toBe('testName');
    expect(sw.id).toBe('testId');
    expect(sw.value).toBe('testValue');
  });
});
