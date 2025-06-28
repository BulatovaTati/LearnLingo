import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import s from './ModalWrapper.module.css';

Modal.setAppElement('#root');

const ModalWrapper = ({ children, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className={s.modal} overlayClassName={s.overlay} preventScroll={false}>
            <button className={s.btn} onClick={onClose}>
                <IoMdClose size={30} />
            </button>
            {children}
        </Modal>
    );
};

export default ModalWrapper;
