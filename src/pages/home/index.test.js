import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './index';

describe('Home', () => {
  test('should render home page correctly', () => {
    const { container } = render(<Home />);
    // it should render logo
    screen.getByText('airbnb-logo.svg');
    // it should render menu: 'Become a host', 'Help', 'SignUp', 'Login'
    screen.getByText('Become a host');
    screen.getByText('Help');
    screen.getByText('SignUp');
    screen.getByText('Login');
    // it shoule render switch button.
    expect(container.querySelector('.react-toggle')).not.toBe(null);
    // it should render search box
    screen.getByRole('combobox');
    // it should show the dropdown when user type something
    userEvent.type(screen.getByRole('combobox'), 'a');
    screen.getByRole('listbox');
    // it should auto complete the input value with the seleced one
    userEvent.click(screen.getByText('aa'));
    expect(screen.getByRole('combobox').value).toBe('aa');
  });
});
