import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'
import { Link } from 'react-router-dom';
const ImageGalleryItem = ({ src, id, title }) => {
    return (
        <li className={styles["ImageGalleryItm"]}>
            <Link to={`/movies/${id}`}>
                <img src={src} alt={title} className={styles["ImageGalleryItem-image"]} />
                <h2>{title}</h2>
            </Link>
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}