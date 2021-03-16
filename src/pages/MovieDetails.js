import React from 'react';
import { Route, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../utils/backend-services';
import { createFullImgLink } from '../utils/helpers';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';
import MovieCard from '../components/MovieCard/MovieCard';


const MovieDetails = ({ match }) => {
  return (
    <div>
      <MovieCard />
      <Route
        path={`${match.path}/reviews`}
        render={props => <Reviews {...props} />}
      />
      <Route
        path={`${match.path}/cast`}
        render={props => <Cast {...props} />}
      />
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape().isRequired
};
