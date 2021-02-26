import React, { Component } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import api from '../utils/backend-services';
import { createFullImgLink } from '../utils/helpers'
import Searchbar from '../components/Searchbar/Searchbar';
import Gallery from '../components/ImageGallery/Gallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import Button from '../components/Button/Button';

class SearchPage extends Component {
    state = {
        movies: [],
        searchQuerry: '',
        pageNumber: 1,
        isLoading: false,
    }

    searchImages = (submitValue) => {
        this.setState({
            searchQuerry: submitValue,
            pageNumber: 1,
        })
    }
    loadMore = () => {
        this.setState(prevState => ({
            pageNumber: prevState.pageNumber + 1
        }))
    }
    paintImages = (searchQuerry, pageNumber) => {
        this.setState({ isLoading: true });
        api.fetchMovieSearch(searchQuerry)
            .then(movies => {
                this.setState(prevState => ({
                    movies: (pageNumber > 1 ? [...prevState.movies, ...movies] : [...movies]),
                }));
                pageNumber > 1 && window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }
            ).finally(() => this.setState({ isLoading: false }))
    }
    componentDidUpdate(prevProps, prevState) {
        const { movies, searchQuerry, pageNumber } = this.state;
        if (prevState.pageNumber !== pageNumber || prevState.searchQuerry !== searchQuerry) {
            this.paintImages(searchQuerry, pageNumber);
        }
    }
    render() {
        const { movies, isLoading } = this.state;
        return (
            <>
                <Searchbar onSubmit={this.searchImages} />
                <Gallery>
                    {movies.map(movie => <ImageGalleryItem
                        key={movie.id}
                        src={createFullImgLink(movie.poster_path)}
                        title={movie.title || movie.original_name || movie.name}
                        id={movie.id} />)}
                </Gallery>
                {movies.length > 0 && <Button loadMore={this.loadMore} />}
                {isLoading && <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}
                />}
            </>
        );
    }
}

export default SearchPage;