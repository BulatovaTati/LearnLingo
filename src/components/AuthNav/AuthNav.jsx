import { IoLogInOutline } from 'react-icons/io5';
import s from './AuthNav.module.css';

const AuthNav = ({ openModal }) => {
    return (
        <div className={s.wrapper}>
            <button type="button" className={s.logInBtn} onClick={() => openModal('login')}>
                <IoLogInOutline size={20} />
                <span>Log in</span>
            </button>

            <button type="button" className={s.registrationBtn} onClick={() => openModal('register')}>
                Registration
            </button>
        </div>
    );
};

export default AuthNav;
