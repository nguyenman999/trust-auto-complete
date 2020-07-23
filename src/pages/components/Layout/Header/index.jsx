import React from 'react';
import { Row, Col } from '../../../../components/Grid';

const Header = (props) => {
  const { logo, desktopMenu, mobileMenu } = props;
  return (
    <Row>
      <Col xs={16} sm={16} md={4} lg={4} xl={4}>
        {logo}
      </Col>
      <Col xs={0} sm={0} md={20} lg={20} xl={20}>
        {desktopMenu}
      </Col>
      <Col xs={8} sm={8} md={0} lg={0} xl={0}>
        {mobileMenu}
      </Col>
    </Row>
  );
};

export default Header;
