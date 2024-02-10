import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  test('renders progress bar with correct progress', () => {
    const { getByText } = render(<ProgressBar progress={50} isVisible={true} skillName="Test Skill" />);
    const progressBar = getByText(/Test Skill, 50%/i);
    expect(progressBar).toBeInTheDocument();
    expect(progressBar.style.width).toBe('50%');
  });

  test('hides progress bar when isVisible is false', () => {
    const { queryByText } = render(<ProgressBar progress={50} isVisible={false} skillName="Test Skill" />);
    const progressBar = queryByText(/Test Skill, 50%/i);
    expect(progressBar).not.toBeInTheDocument();
  });

  test('progress bar width increases over time', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<ProgressBar progress={0} isVisible={true} skillName="Test Skill" />);
    const progressBar = getByText(/Test Skill, 0%/i);
    expect(progressBar.style.width).toBe('0%');
    jest.advanceTimersByTime(500);
    expect(progressBar.style.width).toBe('5%'); 
    jest.advanceTimersByTime(500);
    expect(progressBar.style.width).toBe('10%');
    jest.useRealTimers();
  });
});
