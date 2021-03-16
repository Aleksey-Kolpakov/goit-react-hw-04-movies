import React, { Component, useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
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
import { getLoading, getMovies } from '../redux/movies/movies-selectors'

const SearchPage = () => {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const history = useHistory();
  const location = useLocation(getLoading);
  const dispatch = useDispatch();
  const fetchMovies = (search, pageNumber) => dispatch(moviesOperations.fetchMovies(search, pageNumber))
  const cleanMovies = () => dispatch(moviesActions.cleanMovies());
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getLoading);
  const searchImages = submitValue => {
    setSearchQuerry(submitValue);
    setPageNumber(1);
    history.push({
      pathname: location.pathname,
      search: `search=${submitValue}`,
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
      const querry = new URLSearchParams(location.search).get('search');
      setSearchQuerry(querry);
      return;
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
// const mapStateToProps = state => {
//   return {
//     movies: getMovies(state),
//     isLoading: getLoading(state),
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchMovies: (search, pageNumber) => dispatch(moviesOperations.fetchMovies(search, pageNumber)),
//   cleanMovies: () => dispatch(moviesActions.cleanMovies()),
// });

export default SearchPage;

