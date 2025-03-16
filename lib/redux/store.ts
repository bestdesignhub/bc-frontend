import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/commonSlice';
import loaderReducer from './slices/loaderSlice';
import userSettingReducer from './slices/userSettingSlice';

// Create the store
export const store = configureStore({
  reducer: { common: commonReducer, loader: loaderReducer, userSetting: userSettingReducer },
});

// Infer the types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the typed dispatch
export const dispatch: AppDispatch = store.dispatch;
