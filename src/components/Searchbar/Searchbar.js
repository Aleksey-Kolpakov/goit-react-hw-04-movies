import React, { Component } from 'react';
import styles from './Searchbar.module.css'
class Searchbar extends Component {
    state = {
        searchQuerry: '',
    }
    handleChange = ({ target }) => {
        this.setState({
            searchQuerry: target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuerry);
        this.setState({ searchQuerry: '' });
    }
    render() {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles["SearchForm-button"]}>
                        <span className={styles["SearchForm-button-label"]}>Search</span>
                    </button>

                    <input
                        className={styles["SearchForm-input"]}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuerry"
                        value={this.state.searchQuerry}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;