import React from 'react';
import Header from './Header';
import Content from './Content';
import styles from './style.module.scss';

const Layout = (props) => {
  const { logo, desktopMenu, mobileMenu, content } = props;
  return (
    <div className={styles.container}>
      <Header logo={logo} desktopMenu={desktopMenu} mobileMenu={mobileMenu} />
      <Content>{content}</Content>
    </div>
  );
};

export default Layout;
