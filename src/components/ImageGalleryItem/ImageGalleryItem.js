import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({ src, id, openImage }) => {
    return (
        <li onClick={() => openImage(id)} className={styles["ImageGalleryItm"]}>
            <img src={src} alt="" className={styles["ImageGalleryItem-image"]} />
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    openImage: PropTypes.func.isRequired
}