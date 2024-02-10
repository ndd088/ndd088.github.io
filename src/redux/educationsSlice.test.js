import configureStore from '@reduxjs/toolkit';
import educationsReducer, { fetchEducations } from './educationsSlice';
import api from './api';

jest.mock('./api');

describe('educations slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        educations: educationsReducer,
      },
    });
  });

  test('fetchEducations action creator and reducer behavior for successful fetch', async () => {
    const mockData = [{ id: 1, name: 'Education 1' }, { id: 2, name: 'Education 2' }];
    api.get.mockResolvedValueOnce({ educations: mockData });

    await store.dispatch(fetchEducations());
    const state = store.getState().educations;

    expect(state.status).toEqual('succeeded');
    expect(state.data).toEqual(mockData);
    expect(state.error).toBeNull();

    // You can also test the structure of dispatched actions if necessary
    // expect(store.getActions()).toEqual([
    //   { type: 'educations/fetchEducations/pending' },
    //   { type: 'educations/fetchEducations/fulfilled', payload: mockData },
    // ]);
  });

  test('fetchEducations action creator and reducer behavior for pending fetch', async () => {
    api.get.mockResolvedValueOnce(); 

    store.dispatch(fetchEducations());
    const state = store.getState().educations;

    expect(state.status).toEqual('loading');
    expect(state.data).toEqual([]);
    expect(state.error).toBeNull();
  });

  test('fetchEducations action creator and reducer behavior for failed fetch', async () => {
    const errorMessage = 'Failed to fetch educations';
    api.get.mockRejectedValueOnce(new Error(errorMessage));

    try {
      await store.dispatch(fetchEducations());
    } catch (error) {
      const state = store.getState().educations;
      expect(state.status).toEqual('failed');
      expect(state.data).toEqual([]);
      expect(state.error).toEqual(errorMessage);

      // You can also test the structure of dispatched actions if necessary
      // expect(store.getActions()).toEqual([
      //   { type: 'educations/fetchEducations/pending' },
      //   { type: 'educations/fetchEducations/rejected', error: new Error(errorMessage) },
      // ]);
    }
  });
});