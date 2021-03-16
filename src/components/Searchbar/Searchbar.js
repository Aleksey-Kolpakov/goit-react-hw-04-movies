import React, { useState } from 'react';
import styles from './Searchbar.module.css'

const Searchbar = ({ onSubmit }) => {
    const [searchQuerry, setSearchQuerry] = useState('');
    const handleChange = ({ target }) => {
        setSearchQuerry(target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchQuerry);
        setSearchQuerry('');
    }
    return (
        <header className={styles.Searchbar}>
            <form onSubmit={handleSubmit} className={styles.SearchForm}>
                <button type="submit" className={styles["SearchForm-button"]}>
                    <span className={styles["SearchForm-button-label"]}>Search</span>
                </button>

                <input
                    className={styles["SearchForm-input"]}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name="searchQuerry"
                    value={searchQuerry}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};

export default Searchbar;
