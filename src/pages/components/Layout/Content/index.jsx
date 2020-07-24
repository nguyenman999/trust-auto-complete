import React from 'react';
import { Row, Col } from '../../../../components/Grid';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;
  return (
    <Row>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
