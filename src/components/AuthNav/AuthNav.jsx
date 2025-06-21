import { IoLogInOutline } from 'react-icons/io5';
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={s.wrapper}>
            <button type="button" className={s.logInBtn}>
                <IoLogInOutline size={20} />
                <span>Log in</span>
            </button>

            <button type="button" className={s.registrationBtn}>
                Registration
            </button>
        </div>
    );
};

export default AuthNav;
