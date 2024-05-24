import { configureStore } from '@reduxjs/toolkit';
import educationsReducer from './educationsSlice';
import formSlice from './formSlice';
import skillsReducer, { localStorageMiddleware } from './skillsSlice';

const store = configureStore({
  reducer: {
    educations: educationsReducer,
    form: formSlice,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;