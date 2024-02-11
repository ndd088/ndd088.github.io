import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  try {
    const response = await api.get('/skills');
    return response.data.skills;
  } catch (error) {
    throw error;
  }
});

export const addSkill = createAsyncThunk('skills/addSkill', async (skill) => {
  try {
    const response = await api.post('/skills', skill);
    return response.data.skills;
  } catch (error) {
    throw error;
  }
});

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === fetchSkills.fulfilled.type ||
    action.type === addSkill.fulfilled.type
  ) {
    const state = store.getState();
    localStorage.setItem('skills', JSON.stringify(state.skills.data));
  }
  return result;
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    data: JSON.parse(localStorage.getItem('skills')) || [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSkill.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default skillsSlice.reducer;