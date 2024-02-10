import React from 'react';
import { render } from '@testing-library/react';
import TimeLine from './TimeLine';

describe('TimeLine component', () => {
  test('renders without crashing', () => {
    render(<TimeLine />);
  });

  test('displays error message when error prop is true', () => {
    const { getByText } = render(<TimeLine error={true} />);
    expect(getByText('Something went wrong; please review your server connection!')).toBeInTheDocument();
  });

  test('does not display timeline when data prop is not provided', () => {
    const { container } = render(<TimeLine />);
    expect(container.querySelector('.timeline-container')).toBeNull();
  });

  test('displays timeline events correctly with provided data', () => {
    const testData = [
      { date: '2022-01-01', title: 'Event 1', text: 'Description for Event 1' },
      { date: '2022-01-02', title: 'Event 2', text: 'Description for Event 2' },
      { date: '2022-01-03', title: 'Event 3', text: 'Description for Event 3' },
    ];
    const { getByText } = render(<TimeLine data={testData} title="Test Timeline" />);
    expect(getByText('Test Timeline')).toBeInTheDocument();
    expect(getByText('Event 1')).toBeInTheDocument();
    expect(getByText('Description for Event 1')).toBeInTheDocument();
    expect(getByText('Event 2')).toBeInTheDocument();
    expect(getByText('Description for Event 2')).toBeInTheDocument();
    expect(getByText('Event 3')).toBeInTheDocument();
    expect(getByText('Description for Event 3')).toBeInTheDocument();
  });
});