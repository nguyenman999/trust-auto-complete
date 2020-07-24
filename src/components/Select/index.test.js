import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './index';

describe('Select', () => {
  test('should render default', () => {
    render(
      <Select style={{ width: 200 }}>
        <Select.Option key="1234" value={1234}>
          1234
        </Select.Option>
        <Select.Option key="1243" value={1243}>
          1243
        </Select.Option>
        <Select.Option key="1235" value={1235}>
          1235
        </Select.Option>
        <Select.Option key="1237" value={1237}>
          1237
        </Select.Option>
        <Select.Option key="1236" value={1236}>
          1236
        </Select.Option>
      </Select>,
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
