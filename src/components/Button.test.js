import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

describe('Button component', () => {
  test('renders button with text', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={onClick} />);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test('renders button with icon', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button icon={faCoffee} onClick={onClick} />);
    const button = getByTestId('button-icon');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test('renders button with text and icon', () => {
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(
      <Button text="Click me" icon={faCoffee} onClick={onClick} />
    );
    const buttonText = getByText('Click me');
    const buttonIcon = getByTestId('button-icon');
    expect(buttonText).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
    fireEvent.click(buttonText);
    expect(onClick).toHaveBeenCalled();
  });
});