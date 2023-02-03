import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { MagnifyingGlass } from 'react-loader-spinner';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImagGallery';
import { fetchImages } from 'components/services/image-api';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  // searchImage = async (imageName) => {
  //   this.setState({ imageName, page:1, photos: []});

  searchImage = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  /*
  componentDidUpdate(prevPros, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      fetchImages(search, page)
        .then(data =>
          this.setState(({ items }) => ({
            items: [...items, ...data.hits],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
      // console.log(this.state.search);
    }
  }
*/

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
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { items, loading, error } = this.state;
    const { searchImage, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery items={items} />
        {loading && <p>...Loading images</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <button onClick={loadMore}>load more</button>}
      </>
    );
  }
}
