import React from 'react';
import { Row, Col } from './index';

export default {
  title: 'Grid',
};

export const Default = () => {
  return (
    <>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  );
};

export const Offset = () => {
  return (
    <>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
    </>
  );
};

export const Responsive = () => {
  return (
    <>
      <Row>
        <Col xs={24} sm={8} md={10} lg={12} xl={16}>
          Col
        </Col>
        <Col xs={24} sm={8} md={10} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={24} sm={8} md={4} lg={4} xl={14}>
          Col
        </Col>
      </Row>
    </>
  );
};
