import React, { Component } from 'react';
import Gallery from '../components/ImageGallery/Gallery';
import api from '../utils/backend-services';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import { createFullImgLink } from '../utils/helpers';

class HomeView extends Component {
    state = {
        trandMovies: []
    }
    componentDidMount() {
        api.fetchTrandingMovies().then(movies => this.setState({
            trandMovies: [...movies],
        }))
    }
    render() {
        const { trandMovies } = this.state;
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
}

export default HomeView;