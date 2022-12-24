import { Component } from "react";
import css from './ImageGalleryItem.module.css'
import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
    state = {
        largeImageURL: null,
    };

    onClickPicture = e => {
        this.setState({ largeImageURL: e.currentTarget.dataset.open });
    };

    closeModal = () => {
        this.setState({ largeImageURL: null });
    };
    render() {
        const { largeImageURL } = this.state;
        const { picture, id, webformatURL } = this.props;
        return <li
            className={css.ImageGalleryItem}
        >
            <img
                className={css.GalleryItem}
                src={webformatURL}
                alt={id}
                data-open={picture.largeImageURL}
                onClick={this.onClickPicture}
            />
            {largeImageURL && (
                <Modal largeImage={largeImageURL} closeModal={this.closeModal} />
            )}
        </li>
    }
}

ImageGalleryItem.propTypes = {
    picture: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};