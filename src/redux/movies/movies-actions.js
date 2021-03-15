import { createAction } from '@reduxjs/toolkit'

const fetchMoviesSucces = createAction('movies/fetchMoviesSucces');
const fetchMoviesError = createAction('movies/fetchMoviesError');
const fetchMoviesRequest = createAction('movies/fetchMoviesRequest');

const fetchTrendMoviesSucces = createAction('movies/fetchTrendMoviesSucces');
const fetchTrendMoviesError = createAction('movies/fetchTrendMoviesError');
const fetchTrendMoviesRequest = createAction('movies/fetchTrendMoviesRequest');

const fetchMovieDetailSucces = createAction('movies/fetchMovieDetSucces');
const fetchMovieDetailError = createAction('movies/fetchMovieDetError');
const fetchMovieDetailRequest = createAction('movies/fetchMovieDetRequest');

const fetchCastSucces = createAction('movies/fetchCastSucces');
const fetchCastError = createAction('movies/fetchCastError');
const fetchCastRequest = createAction('movies/fetchCastRequest');

const fetchReviewsSucces = createAction('movies/fetchCastSucces');
const fetchReviewsError = createAction('movies/fetchCastError');
const fetchReviewsRequest = createAction('movies/fetchCastRequest');

const cleanMovies=createAction('movies/cleanMovies')
export default {
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
    cleanMovies,
}