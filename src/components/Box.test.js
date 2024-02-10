import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box component', () => {
  test('renders title and content correctly', () => {
    const title = 'Test Title';
    const content = 'Test Content';
    render(<Box title={title} content={content} />);
    
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });
});