import { createReducer } from '@reduxjs/toolkit';
import actions from './movies-actions';
const {
  fetchMoviesSucces,
  fetchMoviesError,
  fetchMoviesRequest,
  fetchMovieDetailSucces,
  fetchMovieDetailError,
  fetchMovieDetailRequest,
  fetchCastSucces,
  fetchCastError,
  fetchCastRequest,
  fetchReviewsSucces,
  fetchReviewsError,
  fetchReviewsRequest,
  fetchTrendMoviesSucces,
  fetchTrendMoviesError,
  fetchTrendMoviesRequest,
} = actions;

export const moviesReducer = createReducer([], {
  [fetchMoviesSucces]: (state, { payload }) => [...state, ...payload],
  [fetchTrendMoviesSucces]: (state, { payload }) => [...payload],
});

export const movieDetailsReducer = createReducer(
  {},
  {
    [fetchMovieDetailSucces]: (state, { payload }) => payload,
  },
);

export const castReducer = createReducer([], {
  [fetchCastSucces]: (state, { payload }) => [...payload],
});

export const reviewsReducer = createReducer([], {
  [fetchReviewsSucces]: (state, { payload }) => [...payload],
});
export const errorReducer = createReducer(false, {
  [fetchMoviesSucces]: () => false,
  [fetchMoviesError]: (state, { payload }) => payload,
  [fetchMoviesRequest]: () => false,
  [fetchMovieDetailSucces]: () => false,
  [fetchMovieDetailError]: (state, { payload }) => payload,
  [fetchMovieDetailRequest]: () => false,
  [fetchCastSucces]: () => false,
  [fetchCastError]: (state, { payload }) => payload,
  [fetchCastRequest]: () => false,
  [fetchReviewsSucces]: () => false,
  [fetchReviewsError]: (state, { payload }) => payload,
  [fetchReviewsRequest]: () => false,
  [fetchTrendMoviesSucces]: () => false,
  [fetchTrendMoviesError]: (state, { payload }) => payload,
  [fetchTrendMoviesRequest]: () => false,
});
export const requesReducer = createReducer(false, {
  [fetchMoviesSucces]: () => false,
  [fetchMoviesError]: () => false,
  [fetchMoviesRequest]: () => true,
  [fetchMovieDetailSucces]: () => false,
  [fetchMovieDetailError]: () => false,
  [fetchMovieDetailRequest]: () => true,
  [fetchCastSucces]: () => false,
  [fetchCastError]: () => false,
  [fetchCastRequest]: () => true,
  [fetchReviewsSucces]: () => false,
  [fetchReviewsError]: () => false,
  [fetchReviewsRequest]: () => true,
  [fetchTrendMoviesSucces]: () => false,
  [fetchTrendMoviesError]: () => false,
  [fetchTrendMoviesRequest]: () => true,
});
