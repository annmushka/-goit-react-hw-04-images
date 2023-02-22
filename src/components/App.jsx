// const API_KEY = '33067692-1a5baf69be2ef609319513ff4';
import './styles.css';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { getImageService } from './services/images';

export const App = () => {
  // state = {
  //   images: [],
  //   status: 'idle',
  //   isLoading: false,
  //   query: '',
  //   page: 1,
  //   total: 0,
  //   per_page: 12,

  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [per_page, setPer_page] = useState(12);

  // async componentDidUpdate(prevProps, prevState) {
  //   const { query, per_page, page } = this.state;
  //   if (query !== prevState.query || page !== prevState.page) {
  //     this.setState({ status: 'loading' });
  //     try {
  //       const response = await getImageService(query, page, per_page);
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...response.hits],
  //         total: response.total,
  //         status: 'fulfilled',
  //       }));
  //     } catch (error) {
  //       this.setState({ status: 'rejected' });
  //       throw new Error(error.message);
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  useEffect(() => {
    const getImages = async () => {
      setStatus('loading');
      try {
        const response = await getImageService(query, page, per_page);
        setImages(prevImages => [...prevImages, ...response.hits]);
        setTotal(response.total);
        setStatus('fulfilled');
      } catch (error) {
        setStatus('rejected');
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page, per_page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    // this.setState(prevState => ({
    //   page: prevState.page + 1,
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
    </div>
  );
};
