import React from 'react';
import { render, screen } from '@testing-library/react';
import Expertise from './Expertise';

describe('Expertise component', () => {
  test('renders title correctly', () => {
    const title = 'Test Title';
    render(<Expertise title={title} data={[]} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders loading message when data is empty', () => {
    const title = 'Test Title';
    render(<Expertise title={title} data={[]} />);
    const loadingElement = screen.getByText('Loading expertise data...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders expertise data correctly when data is provided', () => {
    const title = 'Test Title';
    const data = [
      { date: '2024-01-01', title: 'Test 1', description: 'Test description 1' },
      { date: '2024-01-02', title: 'Test 2', description: 'Test description 2' },
    ];
    render(<Expertise title={title} data={data} />);
    
    const dateElements = screen.getAllByText(/2024-01/);
    expect(dateElements).toHaveLength(2);

    const titleElements = screen.getAllByRole('heading', { level: 2 });
    expect(titleElements).toHaveLength(2);
    expect(titleElements[0]).toHaveTextContent('Test 1');
    expect(titleElements[1]).toHaveTextContent('Test 2');

    const descriptionElements = screen.getAllByRole('paragraph');
    expect(descriptionElements).toHaveLength(2);
    expect(descriptionElements[0]).toHaveTextContent('Test description 1');
    expect(descriptionElements[1]).toHaveTextContent('Test description 2');
  });
});