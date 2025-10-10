import React from 'react';
import * as styles from './Modal.module.css';

type ModalProps = {
  open?: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, handleClose, children }) => {
  if (!open) return null;

  const css = styles as unknown as Record<string, string>;

  return (
    <div className={css.modalOverlay} onClick={handleClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={css.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
