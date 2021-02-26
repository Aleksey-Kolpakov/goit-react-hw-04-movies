import React from 'react';
import styles from './Gallery.module.css'
const Gallery = ({ children }) => {
    return (
        <ul className={styles.Gallery}>
            {children}
        </ul>
    );
};

export default Gallery;