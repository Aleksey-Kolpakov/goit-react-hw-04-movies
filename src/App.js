import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import NotFound from './pages/NotFound';
import api from './utils/backend-services';
import routes from './routes';
import AppHeader from './components/AppHeader/AppHeader';
const HomePage = lazy(() => import('./pages/HomePage.js' /* webpackChunkName: "home-page" */));
const MovieDetails = lazy(() => import('./pages/MovieDetails' /* webpackChunkName: "MovieDetails" */));
const SearchPage = lazy(() => import('./pages/SearchPage' /* webpackChunkName: "SearchPage" */));

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
          <Route path={routes.movieDetails} component={MovieDetails}  />
          <Route path={routes.movies} component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
