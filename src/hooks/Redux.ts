import { useDispatch as redux_useDispatch, useSelector as redux_useSelector } from 'react-redux';
import { createSelector as redux_createSelector } from 'reselect';
import type { AppDispatch, RootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = redux_useDispatch.withTypes<AppDispatch>();
export const useSelector = redux_useSelector.withTypes<RootState>();
export const createSelector = redux_createSelector.withTypes<RootState>();

export type DispatchAction<T> = {
    type: string;
    payload: T;
};
