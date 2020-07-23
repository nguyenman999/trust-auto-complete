import React from 'react';
import { Row, Col } from '../../../../components/Grid';

const Content = (props) => {
  const { children } = props;
  return (
    <Row>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default Content;
