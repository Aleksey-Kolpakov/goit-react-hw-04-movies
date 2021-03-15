import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import api from '../utils/backend-services';
import { createFullImgLink } from '../utils/helpers';
import Searchbar from '../components/Searchbar/Searchbar';
import Gallery from '../components/ImageGallery/Gallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import Button from '../components/Button/Button';
import moviesOperations from '../redux/movies/movies-operations';
import moviesActions from '../redux/movies/movies-actions';


const SearchPage = ({ movies, isLoading, fetchMovies, cleanMovies }) => {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const searchImages = submitValue => {
    setSearchQuerry(submitValue);
    setPageNumber(1);
    history.push({
      pathname: location.pathname,
      search: `${submitValue}`,
    });
  }

  const loadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  const paintImages = (searchQuerry, pageNumber) => {
    fetchMovies(searchQuerry, pageNumber);
  };
  useEffect(() => {
    if (location.search) {
      const querry = location.search.substr(1);
      return setSearchQuerry(querry);
    }
    cleanMovies();
  }, [])
  useEffect(() => {
    if (searchQuerry) {
      paintImages(searchQuerry, pageNumber);
    }

  }, [searchQuerry, pageNumber])

  useEffect(() => {
    if (pageNumber > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [movies])

  return (
    <>
      <Searchbar onSubmit={searchImages} />
      <Gallery>
        {movies.map(movie => (
          <ImageGalleryItem
            key={movie.id}
            src={movie.poster_path ? createFullImgLink(movie.poster_path) : createFullImgLink('/sWR1x6UCMCGN9xEf8RGhPS934X0.jpg')}
            title={movie.title || movie.original_name || movie.name}
            id={movie.id}
          />
        ))}
      </Gallery>
      {movies.length > 0 && <Button loadMore={loadMore} />}
      {isLoading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (search, pageNumber) => dispatch(moviesOperations.fetchMovies(search, pageNumber)),
  cleanMovies: () => dispatch(moviesActions.cleanMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

