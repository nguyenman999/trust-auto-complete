import React from 'react';
import Layout from '../components/Layout';
import Menu from './components/Menu';
import Content from './components/Content';
import { ReactComponent as Logo } from '../../assets/airbnb-logo.svg';
import styles from './style.module.scss';

const menu = ['Become a host', 'Help', 'SignUp', 'Login'];

const HomePage = () => {
  return (
    <Layout
      content={<Content />}
      desktopMenu={<Menu data={menu} />}
      mobileMenu={<Menu data={menu} isMobile />}
      logo={<Logo className={styles.logo} />}
    />
  );
};

export default HomePage;
