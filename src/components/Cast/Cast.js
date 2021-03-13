import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createFullImgLink } from '../../utils/helpers';
import Gallery from '../ImageGallery/Gallery';
import PropTypes from 'prop-types';
import moviesOperations from '../../redux/movies/movies-operations';
const Cast = ({ cast, fetchCast, match }) => {
  const id = match.params.movieId;
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
const mapStateToProps = state => {
  return {
    cast: state.cast,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCast: id => dispatch(moviesOperations.fetchCast(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cast);
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      gender: PropTypes.number,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    }),
  ).isRequired,
};
