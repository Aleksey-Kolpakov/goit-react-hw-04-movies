import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createFullImgLink } from '../../utils/helpers';
import Gallery from '../ImageGallery/Gallery';
import PropTypes from 'prop-types';
import moviesOperations from '../../redux/movies/movies-operations';
import { getCast } from '../../redux/movies/movies-selectors'
const Cast = ({ match }) => {
  const id = match.params.movieId;
  const cast = useSelector(getCast);
  const dispatch = useDispatch();
  const fetchCast = () => {
    dispatch(moviesOperations.fetchCast(id));
  };
  useEffect(() => {
    fetchCast(id);
  }, [fetchCast]);
  return (
    <>
      <Gallery>
        {cast.length > 0 &&
          cast.map(actor => {
            const actorImgDefault =
              actor.gender === 1
                ? '/tjJFdy3t5MnbWCl7LLGJgBXjhyJ.jpg'
                : '/ajNaPmXVVMJFg9GWmu6MJzTaXdV.jpg';
            return (
              <li key={actor.credit_id}>
                <img
                  src={
                    actor.profile_path
                      ? createFullImgLink(actor.profile_path)
                      : createFullImgLink(actorImgDefault)
                  }
                  alt={actor.name}
                />
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
      </Gallery>
    </>
  );
};

export default Cast;
Cast.propTypes = {

  match: PropTypes.shape().isRequired,
};
