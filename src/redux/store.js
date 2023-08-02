import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './employeeSlice';

export  const store =  configureStore({
  reducer: {
    employee: counterReducer,
  },
});
