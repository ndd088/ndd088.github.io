import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitForm = createAsyncThunk('form/submitForm', async (formData) => {
  try {
    const response = await fetch('https://example.com/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data; 
    } else {
      throw new Error(data.error); 
    }
  } catch (error) {
    throw new Error('An error occurred while submitting the form.'); 
  }
});

const initialState = {
  isFormOpen: false,
  submittedData: null,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    handleToggleForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
    resetForm: (state) => {
      state.isFormOpen = false;
      state.submittedData = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.submittedData = null;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.submittedData = action.payload;
        state.error = null;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.submittedData = null;
        state.error = action.error.message; 
      });
  },
});

export const { handleToggleForm, resetForm } = formSlice.actions;

export default formSlice.reducer;