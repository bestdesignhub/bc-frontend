import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserSettingState {
  cartCount: number;
  wishlistCount: number;
}

const initialState: UserSettingState = {
  cartCount: 0,
  wishlistCount: 0,
};

const userSettingSlice = createSlice({
  name: 'userSetting',
  initialState,
  reducers: {
    setAllUserSettingsValues: (state, action: PayloadAction<UserSettingState>) => {
      state.cartCount = action.payload.cartCount;
      state.wishlistCount = action.payload.wishlistCount;
    },
    setUserSettingCartCount: (state, action: PayloadAction<number>) => {
      state.cartCount = action.payload;
    },
    setUserSettingIncreaseCartCount: (state) => {
      state.cartCount += 1;
    },
    setUserSettingDecreaseCartCount: (state) => {
      state.cartCount -= 1;
    },
    setUserSettingWishlistCount: (state, action: PayloadAction<number>) => {
      state.wishlistCount = action.payload;
    },
    setUserSettingIncreaseWishlistCount: (state) => {
      state.wishlistCount += 1;
    },
    setUserSettingDecreaseWishlistCount: (state) => {
      state.wishlistCount -= 1;
    },
  },
});

export const {
  setAllUserSettingsValues,
  setUserSettingCartCount,
  setUserSettingWishlistCount,
  setUserSettingIncreaseCartCount,
  setUserSettingDecreaseCartCount,
  setUserSettingIncreaseWishlistCount,
  setUserSettingDecreaseWishlistCount,
} = userSettingSlice.actions;
export default userSettingSlice.reducer;
