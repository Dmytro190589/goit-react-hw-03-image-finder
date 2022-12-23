
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import { Component } from "react";
import css from './ImageGallery.module.css';
import { Button } from "components/Button/Button";
export class ImageGallery extends Component {
    state = {
        pictures: [],
        error: null,
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        let fetchApi = `https://pixabay.com/api/?q=${this.props.request}&page=${this.props.page}&key=32188419-e3a5ebcfb978061bafc2d31ff&image_type=photo&orientation=horizontal&per_page=12`;

        if (
            this.props.request !== prevProps.request ||
            this.props.page !== prevProps.page
        ) {
            this.setState({ isLoading: true })
            fetch(fetchApi)
                .then(res => res.json())
                .then(data => {
                    if (!data.hits?.length) {
                        alert('Bad request,try again');
                    }
                    this.setState(prevState => ({
                        pictures: [...prevState.pictures, ...data.hits],
                    }))
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ isLoading: false }))
        }
    }
  
    render() {
        return (
            <>
                <ul className={css.gallery} >
                    {this.state.pictures &&
                        this.state.pictures.map(picture => (
                            <ImageGalleryItem
                                key={picture.id}
                                picture = {picture}
                                webformatURL={picture.webformatURL}
                            />
                        ))}

                </ul>
                {this.state.isLoading && <Loader />}
                {this.state.pictures.length ? <Button onClick={this.props.loadMoreBtn} /> : ''}


            </>
        );
    }
}



