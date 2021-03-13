import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moviesOperations from '../../redux/movies/movies-operations';
const Reviews = ({ reviews, fetchReviews ,match}) => {
  
    useEffect(() => {
          const id = match.params.movieId;
        fetchReviews(id)
    },[fetchReviews])
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
const mapStateToProps = state => {
  return {
    cast: state.reviews,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: id => dispatch(moviesOperations.fetchReviews(id)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Reviews);

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string
    }))
}