import '../styles.css';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  // state = {
  //   isOpenModal: false,
  // };
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    //   this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
    // };
    setIsOpenModal(prevState => !prevState);
  };

  const { webformatURL, tags, largeImageURL } = props.image;
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        onClick={handleToggleModal}
        src={webformatURL}
        alt={tags}
      />
      {isOpenModal && (
        <Modal
          className="Modal"
          largeImageURL={largeImageURL}
          closeModal={handleToggleModal}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
