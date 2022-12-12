import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { IconButton } from 'components/base styles/Buttons';
import { Overlay, Modal } from './ContactModalEdit.styled';
import { ContactEditorForm } from './ContactFormEdit';

const modalRoot = document.querySelector('#modal-root');

export const ContactModalEdit = ({ onClose, onSave, contact }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <IconButton
          type="button"
          onClick={() => onClose()}
          aria-label="Close modal"
        >
          <MdClose size={15} />
        </IconButton>
        <ContactEditorForm contact={contact} onEdit={onSave} />
      </Modal>
    </Overlay>,
    modalRoot
  );
};

ContactModalEdit.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
