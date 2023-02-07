import Modal from 'react-modal';
import PropTypes from 'prop-types';
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },

  content: {
    position: 'relative',
    top: '0',
    left: '0',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    backgroundColor: 'transparent',
    border: 'none',
    overflow: 'hidden',
    padding: '0',
  },
};
Modal.setAppElement('#root');

export const ModalImage = ({ selectImage, resetImage }) => {
  return (
    <Modal
      isOpen={Boolean(selectImage)}
      onRequestClose={resetImage}
      style={modalStyles}
      // shouldCloseOnOverlayClick="true"
    >
      <img src={selectImage} alt="Large img" />
    </Modal>
  );
};

Modal.propTypes = {
  selectImage: PropTypes.string,
  resetImage: PropTypes.func,
};
