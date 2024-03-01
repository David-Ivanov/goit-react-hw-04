import { useEffect, useState } from 'react';
import { fetchPhotos } from '../../api'
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});


  useEffect(() => {
    async function getPhotos() {
      if (query === '') return

      try {

        setError(false);
        setVisibleBtn(false);
        setLoader(true);

        const data = await fetchPhotos(query, page);

        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data.data.results]
        });

        const totalPages = data.data.total_pages;
        if (totalPages > page) {
          setVisibleBtn(true);
        }

      } catch (e) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === '') return
    setPhotos([]);
    setPage(1);
    setQuery(newQuery);
  }

  const handelMore = () => {
    setPage(page + 1);
  }

  // modal

  const modalToggle = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const openModal = (id) => {
    const photoForModal = photos.find(photo => photo.id === id);
    setModalData({
      image: photoForModal.urls.regular,
      description: photoForModal.alt_description
    });

    modalToggle();
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />


      {photos.length != 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {visibleBtn && <LoadMoreBtn onLoad={handelMore} />}

      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ImageModal isOpen={modalIsOpen} toggle={modalToggle} data={modalData} />
    </>
  )
}

export default App
