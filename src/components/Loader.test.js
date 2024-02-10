import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  test('renders without crashing', () => {
    render(<Loader />);
  });

  test('contains spinning icon', () => {
    const { container } = render(<Loader />);
    const icon = container.querySelector('.icon');
    expect(icon).toHaveClass('fa-spin');
  });
});