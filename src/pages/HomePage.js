import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Gallery from '../components/ImageGallery/Gallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import { createFullImgLink } from '../utils/helpers';
import moviesOperations from '../redux/movies/movies-operations'

const HomeView =({fetchTrandingMovies,trandMovies})=> {
    useEffect(() => {
    fetchTrandingMovies()
},[fetchTrandingMovies])

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
const mapStateToProps = state => {

    return ({
        trandMovies: state.movies,
    })
}

const mapDispatchToProps = dispatch => ({
    fetchTrandingMovies:()=>dispatch(moviesOperations.fetchTrendMovies())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);


