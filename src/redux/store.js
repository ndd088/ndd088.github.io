import { configureStore } from '@reduxjs/toolkit';
import skillsReducer, { localStorageMiddleware } from './skillsSlice';
import educationsReducer from './educationsSlice';

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    educations: educationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;