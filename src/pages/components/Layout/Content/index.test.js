import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './index';

describe('Content', () => {
  test('should render reponsive content layout', () => {
    const { container } = render(
      <Content>
        <div>content</div>
      </Content>,
    );
    // it should render content with responsive layout
    const row = container.querySelectorAll('.ts-row');
    expect(row.length).toBe(1);
    const col = container.querySelectorAll('.ts-col-24');
    expect(col.length).toBe(1);
    // it should render children as content
    screen.getByText('content');
  });
});
