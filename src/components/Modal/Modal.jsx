import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export const Modal = props => {
  const { id, largeImageURL, tags, closeModal } = props;

  const onClickBackDrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.onClickEsc);
  // }
  useEffect(() => {
    const onClickEsc = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onClickEsc);
    // }
    return () => {
      window.removeEventListener('keydown', onClickEsc);
    };
  }, [closeModal]);
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onClickEsc);
  // }

  return createPortal(
    <div className="Overlay" onClick={onClickBackDrop}>
      <div className="Modal" key={id}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    document.getElementById('modal')
  );
};
Modal.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
