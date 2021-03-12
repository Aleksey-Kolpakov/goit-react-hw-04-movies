import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { moviesReducer, movieDetailsReducer, castReducer, reviewsReducer, errorReducer, requesReducer } from './movies/movies-reducers'
const middleware = getDefaultMiddleware();

const rootReducer = combineReducers({
    movies: moviesReducer,
    movieDetailsReducer: movieDetailsReducer,
    cast: castReducer,
    reviews: reviewsReducer,
    error: errorReducer,
    loading: requesReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development', /// devtools only in developmetn
    middleware,
});

export default store;