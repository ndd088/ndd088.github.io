import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Skills from './Skills';

describe('Skills component', () => {
  test('renders Skills component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    const headingElement = getByText(/Skills/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('opens form when "Open Edit" button is clicked', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );

    const openButton = getByText('Open Edit');
    fireEvent.click(openButton);

    const formElement = await waitFor(() => getByTestId('skills-form'));
    expect(formElement).toBeInTheDocument();
  });

  test('adds a skill when submitted in the form', async () => {
    const { getByText, getByLabelText, getByTestId, queryByText } = render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );

    const openButton = getByText('Open Edit');
    fireEvent.click(openButton);

    const skillNameInput = getByLabelText('Skill Name');
    fireEvent.change(skillNameInput, { target: { value: 'React' } });

    const rangeInput = getByLabelText('Range');
    fireEvent.change(rangeInput, { target: { value: '80' } });

    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);

    // Wait for skill to be added
    await waitFor(() => {
      const skillElement = getByText('React');
      expect(skillElement).toBeInTheDocument();
    });

    // Ensure form is closed after submitting
    const formElement = queryByText('Submit');
    expect(formElement).toBeNull();
  });

});
