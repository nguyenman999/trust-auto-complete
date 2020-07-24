import React from 'react';
import Layout from './index';

export default {
  title: 'page/components/Layout',
};

export const Default = () => {
  return (
    <Layout
      logo="logo"
      desktopMenu="desktop menu"
      mobileMenu="mobile menu"
      content="content"
    />
  );
};
