import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders Home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const homePageTitle = screen.getByText(/Nana Dzigua/i);
    expect(homePageTitle).toBeInTheDocument();
  });

  test('navigates to Inner page when the route is /inner', () => {
    render(
      <BrowserRouter initialEntries={['/inner']}>
        <App />
      </BrowserRouter>
    );

    const innerPageTitle = screen.getByText(/Experience/i);
    expect(innerPageTitle).toBeInTheDocument();
  });
});