
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import { Component } from "react";
import css from './ImageGallery.module.css';
import { Button } from "components/Button/Button";
import PropTypes from 'prop-types'
export class ImageGallery extends Component {
    state = {
        pictures: [],
        error: null,
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const { request, page } = this.props;
        const prevRequest = prevProps.request;
        const prevPage = prevProps.page;
        let fetchApi = `https://pixabay.com/api/?q=${this.props.request}&page=${this.props.page}&key=32188419-e3a5ebcfb978061bafc2d31ff&image_type=photo&orientation=horizontal&per_page=12`;
        if (
            prevPage !== page || prevRequest !== request
       
        ) {
            this.setState({ isLoading: true })
            fetch(fetchApi)
                .then(res => res.json())
                .then(data => {
                    if (!data.hits?.length) {
                        alert('Bad request,try again');
                    }
                    if (request === prevRequest)
                       { return this.setState(prevState => ({
                            pictures: [...prevState.pictures, ...data.hits]
                        }))}
                        else {
                            return this.setState({pictures: [...data.hits]})
                        }
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ isLoading: false }))
        }
        

    }

    render() {
        const { isLoading, pictures } = this.state;
        const { loadMoreBtn } = this.props;
        return (
            <>

                <ul className={css.gallery} >
                    {this.state.pictures &&
                        this.state.pictures.map(picture => (
                            <ImageGalleryItem
                                key={picture.id}
                                picture={picture}
                                webformatURL={picture.webformatURL}
                            />
                        ))}

                </ul>
                {isLoading && <Loader />}
                {pictures.length ? <Button onClick={loadMoreBtn} /> : ''}


            </>
        );
    }
}
ImageGallery.propTypes = {
    request: PropTypes.string.isRequired,
    loadMoreBtn: PropTypes.func,
    page: PropTypes.number.isRequired,
}



// this.setState(prevState => ({
//     pictures: [...prevState.pictures, ...data.hits]
// }))