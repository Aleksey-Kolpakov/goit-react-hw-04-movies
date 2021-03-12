import actions from './movies-actions';
import api from '../../utils/backend-services'

const fetchTrendMovies = () => dispatch => {
    dispatch(actions.fetchTrendMoviesRequest());
    api.fetchTrandingMovies()
        .then(movies => dispatch(actions.fetchTrendMoviesSucces(movies)))
        .catch(error => dispatch(actions.fetchTrendMoviesError(error)))
}

const fetchMovies = (search, pageNumber) => dispatch => {
    dispatch(actions.fetchMoviesRequest());
    api.fetchMovieSearch(search, pageNumber)
        .then(movies => dispatch(actions.fetchMoviesSucces(movies)))
        .catch(error => actions.fetchMoviesError(error))
}
const fetchMovieDetails = (id) => dispatch => {
    dispatch(actions.fetchMovieDetailRequest())
    api.searchMovieByIdFetch(id)
        .then(movie => dispatch(actions.fetchMovieDetailSucces(movie)))
        .catch(error => dispatch(actions.fetchMovieDetailError(error)))
}

const fetchCast = (id) => dispatch => {
    dispatch(actions.fetchCastDetRequest())
    api.searchCastOfMovieById(id)
        .then(cast => dispatch(actions.fetchCastSucces(cast)))
        .catch(error => dispatch(actions.fetchCastSucces(error)))
}

const fetchReviews = (id) => dispatch => {
    dispatch(actions.fetchReviewsRequest())
    api.searchReviewsOfMovieById(id)
        .then(reviews => dispatch(actions.fetchReviewsSucces(reviews)))
        .catch(error => dispatch(actions.fetchReviewsError(error)))
}