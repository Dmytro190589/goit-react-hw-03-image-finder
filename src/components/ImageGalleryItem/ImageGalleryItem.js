import { Component } from "react";
import css from './ImageGalleryItem.module.css'
import Modal from "components/Modal/Modal";
export class ImageGalleryItem extends Component {
    state = {
        largeImageURL: null,
    };

    onImageClick = e => {
        this.setState({ largeImageURL: e.currentTarget.dataset.action });
    };

    closeModal = () => {
        this.setState({ largeImageURL: null });
    };
    render() {
        const { largeImageURL } = this.state;
        const { picture } = this.props;
        return <li
            className={css.ImageGalleryItem}
        >
            <img
                className={css.GalleryItem}
                src={this.props.webformatURL}
                alt={this.props.id}
                data-action={picture.largeImageURL}
                onClick={this.onImageClick}
            />
            {largeImageURL && (
                <Modal largeImage={largeImageURL} closeModal={this.closeModal} />
            )}
        </li>
    }
}