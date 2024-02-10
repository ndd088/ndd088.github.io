import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Info component', () => {
  test('renders text correctly', () => {
    const testText = 'Test text';
    render(<Info text={testText} />);
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
  });
});