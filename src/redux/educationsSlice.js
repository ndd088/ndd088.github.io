import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const fetchEducations = createAsyncThunk('educations/fetchEducations', async () => {
    try {
      const response = await api.get('/educations');
      return response.data.educations;
    } catch (error) {
      throw error;
    }
  });
  
const educationsSlice = createSlice({
  name: 'educations',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;

        localStorage.setItem('educations', JSON.stringify(action.payload));
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default educationsSlice.reducer;