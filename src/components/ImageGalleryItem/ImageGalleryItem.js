import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'
import { Link, withRouter } from 'react-router-dom';
const ImageGalleryItem = ({ src, id, title, location }) => {
    return (
        <li className={styles["ImageGalleryItem"]}>
            <Link to={{
                pathname: `/movies/${id}`,
                state: {
                    from: location
                }
            }}>
                <img src={src} alt={title} className={styles["ImageGalleryItem-image"]} />
                <h2>{title}</h2>
            </Link>
        </li>
    );
};

export default withRouter(ImageGalleryItem);

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.shape().isRequired
}