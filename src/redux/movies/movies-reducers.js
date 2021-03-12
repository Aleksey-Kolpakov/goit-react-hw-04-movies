import { createReducer } from '@reduxjs/toolkit';

export const moviesReducer = createReducer([], {});
export const movieDetailsReducer = createReducer({}, {});
export const castReducer = createReducer([], {});
export const reviewsReducer = createReducer([], {});
export const errorReducer = createReducer(false, {});
export const requesReducer = createReducer(false, {});
