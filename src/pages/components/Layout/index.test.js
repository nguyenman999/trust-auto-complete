import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Layout', () => {
  test('should render responsive layout', () => {
    render(
      <Layout
        logo="logo"
        desktopMenu="desktop menu"
        mobileMenu="mobile menu"
        content="content"
      />,
    );
    // it should render layout with content setup in props
    screen.getByText('logo');
    screen.getByText('desktop menu');
    screen.getByText('mobile menu');
    screen.getByText('content');
  });
});
