import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio component', () => {
  test('renders without crashing', () => {
    render(<Portfolio />);
  });

  test('displays portfolio items with correct data', () => {
    const { getByText, getAllByAltText } = render(<Portfolio />);
    expect(getByText('Portfolio')).toBeInTheDocument();
    expect(getByText('Project 1')).toBeInTheDocument();
    expect(getByText('Project 2')).toBeInTheDocument();
    expect(getByText('Project 3')).toBeInTheDocument();
    expect(getByText('Project 4')).toBeInTheDocument();
    expect(getByText('Description for Project 1')).toBeInTheDocument();
    expect(getByText('Description for Project 2')).toBeInTheDocument();
    expect(getByText('Description for Project 3')).toBeInTheDocument();
    expect(getByText('Description for Project 4')).toBeInTheDocument();
    expect(getAllByAltText('Project 1')).toHaveLength(1);
    expect(getAllByAltText('Project 2')).toHaveLength(1);
    expect(getAllByAltText('Project 3')).toHaveLength(1);
    expect(getAllByAltText('Project 4')).toHaveLength(1);
  });

  test('filters portfolio items correctly', () => {
    const { getByText, getAllByAltText } = render(<Portfolio />);
    fireEvent.click(getByText('/ Web Development'));
    expect(getAllByAltText('Project 1')).toHaveLength(2);
    fireEvent.click(getByText('/ Mobile App'));
    expect(getAllByAltText('Project 2')).toHaveLength(1);
    fireEvent.click(getByText('/ Design'));
    expect(getAllByAltText('Project 3')).toHaveLength(1);
  });
});