import ModalWrapper from '../ModalWrapper/ModalWrapper';
import BookForm from '../Forms/BookForm/BookForm';

import s from './Modals.module.css';

const ModalBook = ({ isOpen, onClose, name, surname, avatar_url }) => {
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <p className={s.title}>Book trial lesson</p>
            <p className={s.text}> Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
            <div className={s.teacherCard}>
                <img src={avatar_url} alt={name} className={s.avatarTeacher} />
                <div className={s.wrapper}>
                    <span className={s.teacher}>Your teacher</span>
                    <p>
                        {name} {surname}
                    </p>
                </div>
            </div>
            <BookForm onClose={onClose} />
        </ModalWrapper>
    );
};

export default ModalBook;
