import React from 'react';
import { Row } from '../../../../components/Grid';
import Switch from '../../../../components/Switch';
import { ReactComponent as Night } from '../../../../assets/night-icon.svg';
import { ReactComponent as Sunny } from '../../../../assets/sunny-icon.svg';
import { ReactComponent as CollapseMenu } from '../../../../assets/menu-icon.svg';
import styles from './style.module.scss';

const Menu = (props) => {
  const { data, isMobile } = props;
  return (
    <Row className={styles.container} justify="end" align="middle">
      <Switch
        icons={{
          checked: <Night />,
          unchecked: <Sunny />,
        }}
      />
      {isMobile ? (
        <CollapseMenu className={styles['menu-item']} />
      ) : (
        data.map((item) => {
          return <div className={styles['menu-item']}>{item}</div>;
        })
      )}
    </Row>
  );
};

export default Menu;
