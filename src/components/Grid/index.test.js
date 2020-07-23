import React from 'react';
import { render, screen } from '@testing-library/react';
import { Row, Col } from './index';

describe('Grid', () => {
  test('should render default', () => {
    const { container } = render(
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
      </>,
    );
    const rows = container.querySelectorAll('.ts-row');
    expect(rows.length).toBe(4);
    const col24s = container.querySelectorAll('.ts-col-24');
    expect(col24s.length).toBe(1);
    const col12s = container.querySelectorAll('.ts-col-12');
    expect(col12s.length).toBe(2);
    const col8s = container.querySelectorAll('.ts-col-8');
    expect(col8s.length).toBe(3);
    const col6s = container.querySelectorAll('.ts-col-6');
    expect(col6s.length).toBe(4);
  });
});
