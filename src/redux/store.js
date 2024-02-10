import { configureStore } from '@reduxjs/toolkit';
import educationsReducer from './educationsSlice';
import skillsReducer, { localStorageMiddleware } from './skillsSlice';

const store = configureStore({
  reducer: {
    educations: educationsReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;