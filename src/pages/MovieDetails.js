import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../utils/backend-services';
import { createFullImgLink } from '../utils/helpers';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';
import MovieCard from '../components/MovieCard/MovieCard';
class MovieDetails extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    api
      .searchReviewsOfMovieById(id)
      .then(data => this.setState({ reviews: [...data] }));
  }
  render() {
    const { cast, reviews } = this.state;

    return (
      <div>
        <MovieCard />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => <Reviews {...props} reviews={reviews} />}
        />
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => <Cast {...props}/>}
        />
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {};
