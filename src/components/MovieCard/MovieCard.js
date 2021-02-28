import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes'

const MovieCard = ({src,title,vote_average,overview,genres,match,location,history}) => {
  const  handleGoBack = () => {
        if(location.state&&location.state.from){
         return history.push(location.state.from)
        }
        return history.push(routes.home)
  }
    return (
      <>
        <button onClick={handleGoBack}>Назад</button>
      <img src={src} alt={title} />
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
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </li>
        <li>
                  <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};
export default withRouter(MovieCard);
