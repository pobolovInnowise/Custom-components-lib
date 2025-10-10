import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select component', () => {
  const options = ['summer', 'autumn', 'winter', 'spring'];

  it('renders without crashing', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox'); // select имеет роль combobox
    expect(select).toBeInTheDocument();
  });

  it('renders with the first option selected by default', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe(options[0]);
    expect(screen.getByText(`Hi, ${options[0]}`)).toBeInTheDocument();
  });

  it('changes value when a different option is selected', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;

    // Меняем значение на 'winter'
    fireEvent.change(select, { target: { value: 'winter' } });
    expect(select.value).toBe('winter');
    expect(screen.getByText('Hi, winter')).toBeInTheDocument();
  });

  it('displays empty string if value is "none"', () => {
    render(<Select options={['none', 'summer']} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'none' } });
    expect(screen.queryByText(/^Hi,/)).toBeNull();
  });
});
