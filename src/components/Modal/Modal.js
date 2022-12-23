import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleClick = e => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        const { largeImage } = this.props;

        return (
            <div className={css.overlay} onClick={this.handleClick}>
                <div className={css.modal}>
                    <img src={largeImage} alt="big" />
                </div>
            </div>
        );
    }
}

export default Modal;

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
};