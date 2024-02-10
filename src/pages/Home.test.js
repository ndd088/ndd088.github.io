import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  test('background styles are applied correctly', () => {
    const { container } = render(
      <Router>
        <Home />
      </Router>
    );

    const homeElement = container.querySelector('.home');
    expect(homeElement).toHaveStyle(`
      backgroundImage: url(background.jpg);
      backgroundRepeat: no-repeat;
      backgroundSize: cover;
      minHeight: 100vh;
    `);
  });

  test('clicking on "Know more" button redirects to /inner', () => {
    const { getByText } = render(
      <Router>
        <Home />
      </Router>
    );

    const knowMoreButton = getByText('Know more');
    fireEvent.click(knowMoreButton);

    expect(window.location.pathname).toBe('/inner');
  });

  test('renders without errors', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    
  });

  test('image has correct alt text', () => {
    const { getByAltText } = render(
      <Router>
        <Home />
      </Router>
    );

    const avatarImage = getByAltText('Avatar');
    expect(avatarImage).toBeInTheDocument();
  });

  test('renders "Know more" button with correct text', () => {
    const { getByText } = render(
      <Router>
        <Home />
      </Router>
    );

    const knowMoreButton = getByText('Know more');
    expect(knowMoreButton).toBeInTheDocument();
  });
});