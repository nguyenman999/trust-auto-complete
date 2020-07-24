import React from 'react';
import { render, screen } from '@testing-library/react';
import Switch from './index';

describe('Switch', () => {
  test('should render default', () => {
    render(
      <Switch
        icons={{
          checked: <span>checked</span>,
          unchecked: <span>unchecked</span>,
        }}
      />,
    );
    // it should render component properly
    screen.getByText('checked');
    screen.getByText('unchecked');
  });
});
