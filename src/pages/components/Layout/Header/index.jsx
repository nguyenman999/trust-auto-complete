import React from 'react';
import { Row, Col } from '../../../../components/Grid';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  /**
   * Anything that can be rendered, The logo will be on the top left of the screen.
   */
  logo: PropTypes.node,
  /**
   * The long list of menu that will be rendered on large screen size
   */
  desktopMenu: PropTypes.node,
  /**
   * The long list of menu that will be rendered on small screen size
   */
  mobileMenu: PropTypes.node,
};

export default Header;
