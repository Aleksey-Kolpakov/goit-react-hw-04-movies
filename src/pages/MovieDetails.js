import React, { Component } from 'react';
import api from '../utils/backend-services';
import { createFullImgLink } from '../utils/helpers';
import { NavLink, Route } from 'react-router-dom';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';
import MovieCard from '../components/MovieCard/MovieCard';
class MovieDetails extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };
  componentDidMount() {
    const id = this.props.match.params.movieId;
    api.searchMovieByIdFetch(id).then(data => this.setState({ movie: data }));
    api
      .searchCastOfMovieById(id)
      .then(data => this.setState({ cast: [...data] }));
    api
      .searchReviewsOfMovieById(id)
      .then(data => this.setState({ reviews: [...data] }));
  }
  render() {
    const { movie, cast, reviews } = this.state;
    const src = movie.poster_path && createFullImgLink(movie.poster_path);
    const title = movie.title || movie.original_name || movie.name;
    return (
      <div>
        <MovieCard
          title={movie.title}
          vote_average={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
          src={src}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => <Reviews {...props} reviews={reviews} />}
        />
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => <Cast {...props} cast={cast} />}
        />
      </div>
    );
  }
}

export default MovieDetails;
