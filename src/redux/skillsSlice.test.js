import configureStore from '@reduxjs/toolkit';
import skillsReducer, { fetchSkills, addSkill, setData, localStorageMiddleware } from './skillsSlice';
import api from './api';

jest.mock('./api');

describe('skills slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        skills: skillsReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    });
  });

  test('fetchSkills action creator and reducer behavior for successful fetch', async () => {
    const mockData = [{ id: 1, name: 'Skill 1' }, { id: 2, name: 'Skill 2' }];
    api.get.mockResolvedValueOnce({ skills: mockData });

    await store.dispatch(fetchSkills());
    const state = store.getState().skills;

    expect(state.status).toEqual('succeeded');
    expect(state.data).toEqual(mockData);
    expect(state.error).toBeNull();
  });

  test('addSkill action creator and reducer behavior for successful addition', async () => {
    const newSkill = { id: 3, name: 'New Skill' };
    api.post.mockResolvedValueOnce({ skill: newSkill });

    await store.dispatch(addSkill(newSkill));
    const state = store.getState().skills;

    expect(state.status).toEqual('succeeded');
    expect(state.data).toContainEqual(newSkill);

    expect(localStorage.getItem('skills')).toEqual(JSON.stringify(state.data));
  });

});