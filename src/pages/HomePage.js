import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Gallery from '../components/ImageGallery/Gallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import { createFullImgLink } from '../utils/helpers';
import moviesOperations from '../redux/movies/movies-operations'
import { getMovies } from '../redux/movies/movies-selectors'

const HomeView = () => {
    const trandMovies = useSelector(getMovies);
    const dispatch = useDispatch();
    const fetchTrandingMovies = () => dispatch(moviesOperations.fetchTrendMovies());
    useEffect(() => {
        fetchTrandingMovies()
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Trending today</h1>
            <Gallery>
                {trandMovies.map(movie => (
                    <ImageGalleryItem
                        key={movie.id}
                        src={movie.poster_path && createFullImgLink(movie.poster_path)}
                        title={movie.title || movie.original_name || movie.name}
                        id={movie.id} />))}
            </Gallery>
        </div>
    );

}

export default HomeView;


