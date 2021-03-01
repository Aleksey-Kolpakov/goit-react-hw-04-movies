import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes'
import styles from './MovieCard.module.css'

const MovieCard = ({ src, title, vote_average, overview, genres, match, location, history }) => {
  const handleGoBack = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from)
    }
    return history.push(routes.home)
  }
  return (
    <>
      <button className={styles.button} onClick={handleGoBack}>Назад</button>
      <div className={styles.MovieCard}>
        <img src={src} alt={title} />
        <div className={styles.description}>
          <h2>{title}</h2>
          <p>User score {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres &&
            genres.map(genre => <span key={genre.id}>{genre.name} </span>)}
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={location.state && location.state.from ? {
                pathname: `${match.url}/cast`,
                state: {
                  from: location.state.from
                }
              } : `${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={location.state && location.state.from ? {
                pathname: `${match.url}/reviews`,
                state: {
                  from: location.state.from
                }
              } : `${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div >
      </div >
    </>
  );
};
export default withRouter(MovieCard);

MovieCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape()),
}
