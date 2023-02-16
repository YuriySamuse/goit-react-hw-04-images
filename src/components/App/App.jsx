import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImagGallery';
import { fetchImages } from 'components/services/image-api';
import { ModalImage } from 'components/services/Modal/Modal';

import { ButtonLoadMore } from 'components/App/App.styled';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function foo() {
      try {
        setLoading(true);
        const responce = await fetchImages(query, page);
        if (responce.totalHits === 0) {
          toast.error('Зображень не знайдено. Спробуйте інший запит.');
        }

        const data = responce.hits.map(
          ({ id, largeImageURL, tags, webformatURL }) => {
            return {
              id,
              largeImageURL,
              tags,
              webformatURL,
            };
          }
        );
        setItems(prevItems => [...prevItems, ...data]);
        setLoading(false);
      } catch (error) {
        toast.error('Трапилась помилка, спробуйте ще раз пізніше.');
      }
    }
    foo();
  }, [page, query]);

  const searchImage = submitedQuery => {
    // console.log('searchImage', query, submitedQuery,);
    if (submitedQuery === '') {
      toast.error('Запит не може бути порожнім, спробуйте щось ввести.');
      return;
    }
    if (submitedQuery === query) {
      toast.error('У вашому запиті нічого не змінилось.');
      return;
    }
    setPage(1);
    setItems([]);
    setQuery(submitedQuery);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const selectImage = imgUrl => {
    setSelectedImage(imgUrl);
  };

  const resetImage = () => setSelectedImage(null);

  return (
    <>
      <Searchbar onSubmit={searchImage} />
      <ImageGallery items={items} onSelect={selectImage} />
      {loading && <Loader />}

      {Boolean(items.length) && (
        <ButtonLoadMore onClick={loadMore}>load more</ButtonLoadMore>
      )}
      <ModalImage selectImage={selectedImage} resetImage={resetImage} />
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;

/*
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
    if (search === '') {
      toast.error('Запит не може бути порожнім, спробуйте щось ввести.');
    } else if (search !== this.state.search) {
      this.setState({ search: search, items: [], page: 1 });
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
        
        {Boolean(items.length) && (
          <ButtonLoadMore onClick={loadMore}>load more</ButtonLoadMore>
        )}
        <ModalImage selectImage={selectedImage} resetImage={resetImage} />
        <Toaster position="bottom-center" />
      </>
    );
  }
}
*/
