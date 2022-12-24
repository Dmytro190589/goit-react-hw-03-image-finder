import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './app.module.css';

export default class App extends Component {
  state = {
    request: '',
    id: null,
    page: 1,
  };
  loadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  handleFormSubmit = el => {
    if (el !== this.state.request) {
      this.setState({ request: el, page: 1 });
    }
  };
  render() {
    const {request,page,pictures} = this.state
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          request={request}
          page={page}
          loadMoreBtn={this.loadMoreBtn}
          pictures={pictures}
        />
      </div>
    );
  }
}
