import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImagGallery';
import { fetchImages } from 'components/services/image-api';
import { ModalImage } from 'components/services/Modal/Modal';

import { ButtonLoadMore } from 'components/App/App.styled';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    items: [],
    loading: false,
    error: null,
    selectedImage: false,
  };

  searchImage = ({ search }) => {
    if (search !== this.state.search) {
      this.setState({ search, items: [], page: 1 });
    }
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  selectImage = imgUrl => {
    this.setState({
      selectedImage: imgUrl,
    });
  };

  resetImage = () => {
    this.setState({
      selectedImage: null,
    });
  };

  async componentDidUpdate(prevPros, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const data = await fetchImages(search, page);
        this.setState(({ items }) => ({
          items: [...items, ...data.hits],
        }));
      } catch (error) {
        // this.setState({ error: error.message });
        toast.error('Помилковй запит, спробуйте щось інше.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { items, loading, selectedImage } = this.state;
    const { searchImage, loadMore, selectImage, resetImage } = this;
    return (
      <>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery items={items} onSelect={selectImage} />
        {loading && <Loader />}
        {/* {error && <p>{error}</p>} */}
        {Boolean(items.length) && (
          <ButtonLoadMore onClick={loadMore}>load more</ButtonLoadMore>
        )}
        <ModalImage selectImage={selectedImage} resetImage={resetImage} />
        <Toaster position="bottom-center" />
      </>
    );
  }
}
