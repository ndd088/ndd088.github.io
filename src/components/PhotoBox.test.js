import React from 'react';
import { render } from '@testing-library/react';
import PhotoBox from './PhotoBox';

describe('PhotoBox component', () => {
  test('renders without crashing', () => {
    const { getByAltText } = render(<PhotoBox name="John Doe" avatar="path/to/avatar.jpg" />);
    expect(getByAltText('John Doe')).toBeInTheDocument();
  });

  test('displays the name, title, and description', () => {
    const { getByText } = render(
      <PhotoBox
        name="John Doe"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet"
        avatar="path/to/avatar.jpg"
      />
    );
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  });
});