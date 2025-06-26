import ModalWrapper from '../ModalWrapper/ModalWrapper';
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm';

import s from './Modals.module.css';

const ModalRegistration = ({ isOpen, onClose }) => {
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <p className={s.title}>Registration</p>
            <p className={s.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p> <RegistrationForm />
        </ModalWrapper>
    );
};

export default ModalRegistration;
