/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'checkStatus',
  initialState: { value: "Under Construction" },
  reducers: {
    checkStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const checkStatus = categorySlice.actions;
export default categorySlice.reducer;
