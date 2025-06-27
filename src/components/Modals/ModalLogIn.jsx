import ModalWrapper from '../ModalWrapper/ModalWrapper';
import LogInForm from '../Forms/LogInForm/LogInForm';

import s from './Modals.module.css';

const ModalLogIn = ({ isOpen, onClose }) => {
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <p className={s.title}>Log In</p>
            <p className={s.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            <LogInForm onClose={onClose} />
        </ModalWrapper>
    );
};

export default ModalLogIn;
