import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'checkStatus',
  initialState: { value: 'Under Construction' },
  reducers: {
    checkStatus: (state, action) => { // eslint-disable-next-line
      state.value = action.payload;
    },
  },
});

export const checkStatus = categorySlice.actions;
export default categorySlice.reducer;
