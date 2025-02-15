import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false, isPageSwitchLoading: false };

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsPageSwitchLoading: (state, action) => {
      state.isPageSwitchLoading = action.payload;
    },
  },
});

export const { setLoading, setIsPageSwitchLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
