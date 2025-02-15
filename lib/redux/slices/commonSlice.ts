import { IView } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialCommonState {
  view: IView;
}

const initialState: IInitialCommonState = { view: 'grid' };

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<IView>) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = commonSlice.actions;
export default commonSlice.reducer;
