import React, { Component } from 'react';
import api from '../utils/backend-services'
import { createFullImgLink } from '../utils/helpers'
import { NavLink, Route } from 'react-router-dom'
import Reviews from '../components/Reviews/Reviews'
import Cast from '../components/Cast/Cast'
class MovieDetails extends Component {
    state = {
        movie: {},
        cast: [],
        reviews: [],
    }
    componentDidMount() {
        const id = this.props.match.params.movieId;
        api.searchMovieByIdFetch(id).then(data => this.setState({ movie: data }));
        api.searchCastOfMovieById(id).then(data => this.setState({ cast: [...data] }));
        api.searchReviewsOfMovieById(id).then(data => this.setState({ reviews: [...data] }));
    }
    render() {
        const { movie, cast, reviews } = this.state;
        const src = movie.poster_path && createFullImgLink(movie.poster_path);
        const title = movie.title || movie.original_name || movie.name;
        return (
            <div>
                <img src={src} alt={title} />
                <h2>{title}</h2>
                <p>User score {movie.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                {movie.genres && movie.genres.map(genre => (<span key={genre.id}>{genre.name} </span>))}
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <NavLink to={`${this.props.match.url}/cast`}>
                            Cast
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={`${this.props.match.url}/reviews`}>
                            Reviews
                        </NavLink>
                    </li>
                </ul>
                <Route path={`${this.props.match.path}/reviews`} render={props => <Reviews {...props} reviews={reviews} />} />
                <Route path={`${this.props.match.path}/cast`} render={props => <Cast {...props} cast={cast} />} />
            </div>
        );
    }
}

export default MovieDetails;