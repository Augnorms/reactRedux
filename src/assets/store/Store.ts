import { configureStore } from '@reduxjs/toolkit';
import formInputReducer from '../ReduxSlices/formSlice';
import fetchDataSlice from '../ReduxSlices/fetchDataSlice';

const store = configureStore({
  reducer: {
    formInputs: formInputReducer,
    fetch: fetchDataSlice,
  },
});

export default store;
