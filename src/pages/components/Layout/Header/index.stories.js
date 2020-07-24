import React from 'react';
import Header from './index';

export default {
  title: 'page/components/Layout/Header',
};

export const Default = () => {
  return (
    <Header logo="logo" desktopMenu="desktop menu" mobileMenu="mobile menu" />
  );
};
