import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    closeModal = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onCloseModal()
        }
    }
    handleKeydown = event => {
        if (event.code === "Escape") {
            this.props.onCloseModal();
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
    render() {
        const { src } = this.props
        return createPortal(
            <div onClick={this.closeModal} className={styles.Overlay}>
                <div className={styles.Modal}>
                    <img src={src} alt="" />
                </div>
            </div>,
            modalRoot
        );
    }
}

export default Modal;

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
}
