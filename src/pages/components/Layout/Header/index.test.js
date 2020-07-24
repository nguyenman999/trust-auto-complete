import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  test('should render responsive header', () => {
    render(
      <Header
        logo="logo"
        desktopMenu="desktop menu"
        mobileMenu="mobile menu"
      />,
    );
    // desktop menu should have responsive class
    const desktopMenu = screen.getByText('desktop menu');
    expect(desktopMenu.className).toBe(
      'ts-col ts-col-xs-0 ts-col-sm-0 ts-col-md-20 ts-col-lg-20 ts-col-xl-20',
    );
    // mobile menu should have responsive class
    const mobileMenu = screen.getByText('mobile menu');
    expect(mobileMenu.className).toBe(
      'ts-col ts-col-xs-8 ts-col-sm-8 ts-col-md-0 ts-col-lg-0 ts-col-xl-0',
    );
  });
});
