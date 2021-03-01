import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
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
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.string,
        content: PropTypes.string
    }))
}