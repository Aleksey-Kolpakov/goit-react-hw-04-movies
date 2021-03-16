import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { NavLink, withRouter, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import styles from './MovieCard.module.css';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesActions from '../../redux/movies/movies-actions'
import { createFullImgLink } from '../../utils/helpers'
import { getMovieDetails } from '../../redux/movies/movies-selectors'

const MovieCard = () => {
  const movieDetails = useSelector(getMovieDetails);
  const dispatch = useDispatch();
  const fetchMovieDetails = id => dispatch(moviesOperations.fetchMovieDetails(id));
  const cleanMovieDetails = () => dispatch(moviesActions.cleanMovieDetails());
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const { poster_path, title, vote_average, overview, genres, name, original_name } = movieDetails;
  const src = poster_path
    ? createFullImgLink(poster_path)
    : createFullImgLink('/sWR1x6UCMCGN9xEf8RGhPS934X0.jpg');
  const presentTitle = title || original_name || name;
  useEffect(() => {
    fetchMovieDetails(match.params.movieId);
    return cleanMovieDetails();
  }, []);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(routes.home);
  };
  return (
    <>
      <button className={styles.button} onClick={handleGoBack}>
        Назад
      </button>
      <div className={styles.MovieCard}>
        <img src={src} alt={title} />
        <div className={styles.description}>
          <h2>{presentTitle}</h2>
          <p>User score {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres &&
            genres.map(genre => <span key={genre.id}>{genre.name} </span>)}
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={
                  location.state && location.state.from
                    ? {
                      pathname: `${match.url}/cast`,
                      state: {
                        from: location.state.from,
                      },
                    }
                    : `${match.url}/cast`
                }
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={
                  location.state && location.state.from
                    ? {
                      pathname: `${match.url}/reviews`,
                      state: {
                        from: location.state.from,
                      },
                    }
                    : `${match.url}/reviews`
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default withRouter(MovieCard);

// MovieCard.propTypes = {
//   poster_path: PropTypes.string,
//   title: PropTypes.string,
//   vote_average: PropTypes.number,
//   overview: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.shape()),
// };
