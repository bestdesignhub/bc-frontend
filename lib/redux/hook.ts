import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Correctly typed `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Correctly typed `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
