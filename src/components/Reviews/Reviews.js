import React from 'react';

const Reviews = ({reviews}) => {
    return (
        <>
            <ul>
                {reviews.length > 0 && reviews.map(review => (<li key={review.id}>
                    <h2>{review.author}</h2>
                    <p>{review.content}</p>
                </li>))}
            </ul>
        </>
    );
};

export default Reviews;
