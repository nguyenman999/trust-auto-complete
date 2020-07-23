import React from 'react';
import Select from '../../../../components/Select';
import { Row, Col } from '../../../../components/Grid';
import styles from './style.module.scss';

const Content = () => {
  return (
    <div className={styles.container}>
      <Row justify="center" align="top">
        <Col xs={20} sm={20} md={8} lg={10} xl={10}>
          <Select
            className={styles['auto-complete-container']}
            placeholder="Try Vietnam"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
