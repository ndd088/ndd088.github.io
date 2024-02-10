import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import SkillsForm from './SkillsForm';
import { addSkill } from '../redux/skillsSlice';

const mockStore = configureStore([]);

describe('SkillsForm component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders SkillsForm component', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <SkillsForm onClose={() => {}} onAddSkill={() => {}} />
      </Provider>
    );

    expect(getByLabelText('Skill name')).toBeInTheDocument();
    expect(getByLabelText('Skill range')).toBeInTheDocument();
    expect(getByText('Add skill')).toBeInTheDocument();
  });

  test('validates form fields', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <SkillsForm onClose={() => {}} onAddSkill={() => {}} />
      </Provider>
    );

    const addButton = getByText('Add skill');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Skill name is a required field')).toBeInTheDocument();
      expect(getByText('Skill range is a required field')).toBeInTheDocument();
    });
  });

  test('adds skill when form is submitted with valid inputs', async () => {
    const onAddSkillMock = jest.fn(); 
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <SkillsForm onClose={() => {}} onAddSkill={onAddSkillMock} />
      </Provider>
    );

    const skillNameInput = getByLabelText('Skill name');
    fireEvent.change(skillNameInput, { target: { value: 'React' } });

    const skillRangeInput = getByLabelText('Skill range');
    fireEvent.change(skillRangeInput, { target: { value: '90' } });

    const addButton = getByText('Add skill');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(onAddSkillMock).toHaveBeenCalledWith({ skillName: 'React', skillRange: '90' });
    });
  });
});
