import ReactModal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm';

import s from './Modals.module.css';

ReactModal.setAppElement('#root');

const ModalRegistration = ({ isOpen, onClose }) => {
    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={onClose} className={s.modal} overlayClassName={s.overlay}>
                <button className={s.btn} onClick={onClose}>
                    <IoMdClose size={26} />
                </button>
                <p className={s.title}>Registration</p>
                <p className={s.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>{' '}
                <RegistrationForm />
            </ReactModal>
        </div>
    );
};

export default ModalRegistration;
