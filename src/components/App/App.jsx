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
    this.setState({ search });
  };

  componentDidUpdate(prevPros, prevState) {
    const { search } = this.state;

    if (prevState.search !== search) {
      this.setState({ loading: true });
      fetchImages(search)
        .then(data => this.setState({ items: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
      // console.log(this.state.search);
    }
  }
  // handleSerchSubmit = search => {
  //   console.log(search);
  // };

  render() {
    const { items, loading, error } = this.state;
    const { searchImage } = this;
    return (
      <>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery items={items} />
        {loading && <p>...Loading images</p>}
        {error && <p>{error}</p>}
      </>
    );
  }
}
