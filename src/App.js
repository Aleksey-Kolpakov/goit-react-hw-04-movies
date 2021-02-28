import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styles from './App.module.css';
// import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound';
import api from './utils/backend-services';
import routes from './routes';
import AppHeader from './components/AppHeader/AppHeader';
import Loader from 'react-loader-spinner';
const HomePage = lazy(() => import('./pages/HomePage.js'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
// api.fetchTrandingMovies().then(data => console.log(data))
// api.fetchMovieSearch('kid').then(data => console.log(data))
// api.searchMovieByIdFetch('95057').then(data => console.log(data))
// api.searchCastOfMovieById('95057').then(data => console.log(data))
// api.searchReviewsOfMovieById('10201').then(data => console.log(data))
const App = () => {
  return (
    <>
      <AppHeader />
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route path={routes.movies} component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
