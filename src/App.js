import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/NotFound'
import api from './utils/backend-services'
import MovieDetails from './pages/MovieDetails'
// api.fetchTrandingMovies().then(data => console.log(data))
// api.fetchMovieSearch('kid').then(data => console.log(data))
// api.searchMovieByIdFetch('95057').then(data => console.log(data))
// api.searchCastOfMovieById('95057').then(data => console.log(data))
// api.searchReviewsOfMovieById('10201').then(data => console.log(data))
class App extends Component {

  render() {

    return (

      <>
        <ul>
          <li>
            <NavLink exact to="/" className={styles.Navlink} activeClassName={styles["active-Navlink"]}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={styles.Navlink} activeClassName={styles["active-Navlink"]}>Movies</NavLink>
          </li>
        </ul>
        <div className={styles.App}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/movies" component={SearchPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
