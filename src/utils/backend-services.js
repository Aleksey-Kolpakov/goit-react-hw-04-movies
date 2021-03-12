import axios from 'axios';

const authorizationKeyMovies = "aa839a8447a86111906cd0f508c68539";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const fetchTrandingMovies = () => {
    return axios.get(`/trending/all/day?api_key=${authorizationKeyMovies}&page=1`)
        .then(({ data }) => data.results)
        .catch(error => console.log(error));
}

const fetchMovieSearch = (searchQuerry, pageNumber = 1) => {
    return axios.get(`/search/movie?api_key=${authorizationKeyMovies}&query=${searchQuerry}&page=${pageNumber}`)
        .then(({ data }) => data.results)
        .catch(error => console.log(error));
}


const searchMovieByIdFetch = (id) => {
    return axios.get(`/movie/${id}?api_key=${authorizationKeyMovies}`)
        .then(({ data }) => data)
        .catch(error => console.log(error));
}

const searchCastOfMovieById = (id) => {
    return axios.get(`/movie/${id}/credits?api_key=${authorizationKeyMovies}`)
        .then(({ data }) => data.cast)
        .catch(error => console.log(error));
}
const searchReviewsOfMovieById = (id) => {
    return axios.get(`/movie/${id}/reviews?api_key=${authorizationKeyMovies}&page=1`)
        .then(({ data }) => data.results)
        .catch(error => console.log(error));
}

export default { fetchTrandingMovies, fetchMovieSearch, searchMovieByIdFetch, searchCastOfMovieById, searchReviewsOfMovieById };