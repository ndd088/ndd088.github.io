import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Feedback from './Feedback';

describe('Feedback component', () => {
  test('renders title correctly', () => {
    const title = 'Test Feedback';
    render(<Feedback title={title} data={[]} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders feedback data correctly', () => {
    const title = 'Test Feedback';
    const data = [
      {
        feedback: 'Great work!',
        reporter: {
          name: 'John Doe',
          photoUrl: 'john-doe.jpg',
          citeUrl: '/john-doe',
        },
      },
      {
        feedback: 'Well done!',
        reporter: {
          name: 'Jane Doe',
          photoUrl: 'jane-doe.jpg',
          citeUrl: '/jane-doe',
        },
      },
    ];
    render(
      <MemoryRouter>
        <Feedback title={title} data={data} />
      </MemoryRouter>
    );

    const feedbackElements = screen.getAllByRole('listitem');
    expect(feedbackElements).toHaveLength(2);

    const reporterNameElements = screen.getAllByText(/(John Doe|Jane Doe)/);
    expect(reporterNameElements).toHaveLength(2);
    expect(reporterNameElements[0]).toBeInTheDocument();
    expect(reporterNameElements[1]).toBeInTheDocument();

    const sourceLinks = screen.getAllByRole('link', { name: 'Source' });
    expect(sourceLinks).toHaveLength(2);
    expect(sourceLinks[0]).toHaveAttribute('href', '/john-doe');
    expect(sourceLinks[1]).toHaveAttribute('href', '/jane-doe');
  });
});
