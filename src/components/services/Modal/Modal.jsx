import Modal from 'react-modal';
import PropTypes from 'prop-types';
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '1000',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    maxHeight: '80%',
    border: 'none',
    overflow: 'hidden',
  },
};
Modal.setAppElement('#modal-root');

export const ModalImage = ({ selectImage, resetImage }) => {
  return (
    <Modal
      isOpen={Boolean(selectImage)}
      onRequestClose={resetImage}
      style={modalStyles}
      shouldCloseOnOverlayClick="true"
    >
      <img src={selectImage} alt="Large img" />
    </Modal>
  );
};

Modal.propTypes = {
  selectImage: PropTypes.string,
  resetImage: PropTypes.func,
};
