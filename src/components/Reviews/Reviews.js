import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import moviesOperations from '../../redux/movies/movies-operations';
import { getReviews } from '../../redux/movies/movies-selectors'
const Reviews = ({ match }) => {
    const reviews = useSelector(getReviews);
    const dispatch = useDispatch();
    const fetchReviews = id => dispatch(moviesOperations.fetchReviews(id))
    useEffect(() => {
        const id = match.params.movieId;
        fetchReviews(id)
    }, [])
    return (
        <>
            <ul>
                {reviews.length > 0 ? reviews.map(review => (<li key={review.id}>
                    <h2>{review.author}</h2>
                    <p>{review.content}</p>
                </li>)) : <li><h2>We dont have any reviews for this movie!</h2></li>}
            </ul>
        </>
    );
};

export default Reviews;

Reviews.propTypes = {
    match: PropTypes.shape()
}
