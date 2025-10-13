import React from 'react';
import * as styles from './Modal.module.css';

type ModalProps = {
  open?: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal: React.FC<ModalProps> = ({
                                       open = false,
                                       handleClose,
                                       children,
                                       ...rest
                                     }) => {
  if (!open) return null;

  return (
      <div
          className={styles.modalOverlay}
          onClick={handleClose}
          {...rest}
      >
        <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
              className={styles.closeButton}
              onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
  );
};

export default Modal;
