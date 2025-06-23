import ReactModal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import LogInForm from '../Forms/LogInForm/LogInForm';
import s from './Modals.module.css';

ReactModal.setAppElement('#root');

const ModalLogIn = ({ isOpen, onClose }) => {
    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={onClose} className={s.modal} overlayClassName={s.overlay}>
                <button className={s.btn} onClick={onClose}>
                    <IoMdClose size={26} />
                </button>
                <p className={s.title}>Log In</p>
                <p className={s.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
                <LogInForm />
            </ReactModal>
        </div>
    );
};

export default ModalLogIn;
