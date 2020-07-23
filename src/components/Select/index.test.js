import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './index';

describe('Select', () => {
  test('should render default', () => {
    render(
      <Select
        style={{ width: 200 }}
        inputIcon={<div>Icon</div>}
        options={[
          { text: 'text', value: 'text' },
          { text: 'abc', value: 'abc' },
          { text: 'asd', value: 'asd' },
          { text: 'wes', value: 'wes' },
        ]}
      />,
    );
    // it should render the input tag and icon
    screen.getByRole('combobox');
    screen.getByText('Icon');
    // it should show the dropdown when user type something
    userEvent.type(screen.getByRole('combobox'), 'a');
    screen.getByText('abc');
    // it should auto complete the input value with the seleced one
    userEvent.click(screen.getByText('abc'));
    expect(screen.getByRole('combobox').value).toBe('abc');
  });
});
