import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); 

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    contentLabel="Image Modal"
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    {image && (
      <>
        <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
        <button type="button" onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </>
    )}
  </Modal>
);

export default ImageModal;
