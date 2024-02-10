import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe component', () => {
  test('renders AboutMe component with correct title and content', () => {
    render(<AboutMe />);
    
    const titleElement = screen.getByText('About Me');
    const contentElement = screen.getByText(/I always do my best and work for the result/i);
    
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});