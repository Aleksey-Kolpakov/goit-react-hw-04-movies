import React, { Component } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import api from '../utils/backend-services'
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

class SearchPage extends Component {
    state = {
        images: [],
        searchQuerry: '',
        pageNumber: 1,
        imageToOpen: '',
        isLoading: false,
    }
    closeModal = () => {
        this.setState({
            imageToOpen: ''
        })
    }
    searchImages = (submitValue) => {
        this.setState({
            searchQuerry: submitValue,
            pageNumber: 1,
        })
    }
    openImage = (id) => {
        const imageToOpen = this.state.images.find(image => image.id === id);
        this.setState({ imageToOpen: imageToOpen.largeImageURL })
    };
    loadMore = () => {
        this.setState(prevState => ({
            pageNumber: prevState.pageNumber + 1
        }))
    }

    paintImages = (searchQuerry, pageNumber) => {
        this.setState({ isLoading: true });
        api.fetchImages(searchQuerry, pageNumber)
            .then(images => {
                this.setState(prevState => ({
                    images: (pageNumber > 1 ? [...prevState.images, ...images] : [...images]),
                }));
                pageNumber > 1 && window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }
            ).finally(() => this.setState({ isLoading: false }))
    }
    componentDidUpdate(prevProps, prevState) {
        const { images, searchQuerry, pageNumber } = this.state;
        if (prevState.pageNumber !== pageNumber || prevState.searchQuerry !== searchQuerry) {
            this.paintImages(searchQuerry, pageNumber);
        }
    }
    render() {
        const { images, isModalOpen, imageToOpen, isLoading } = this.state;
        return (
            <>
                <Searchbar onSubmit={this.searchImages} />
                <ImageGallery>
                    {images.map(image => <ImageGalleryItem key={image.id} id={image.id} src={image.previewURL} openImage={this.openImage} />)}
                </ImageGallery>
                {images.length > 0 && <Button loadMore={this.loadMore} />}
                {imageToOpen.length > 0 && <Modal onCloseModal={this.closeModal} src={imageToOpen} />}
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