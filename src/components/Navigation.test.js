import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation component', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
  });

  test('contains navigation items', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('About Me')).toBeInTheDocument();
    expect(getByText('Experience')).toBeInTheDocument();
    expect(getByText('Education')).toBeInTheDocument();
    expect(getByText('Portfolio')).toBeInTheDocument();
    expect(getByText('Contacts')).toBeInTheDocument();
    expect(getByText('Feedback')).toBeInTheDocument();
  });
});