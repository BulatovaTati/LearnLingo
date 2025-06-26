import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import ThemePicker from '../ThemePicker/ThemePicker';
import UserBar from '../UserBar/UserBar';
import { selectLoggedIn, selectUser } from '../../redux/auth/selectors';
import s from './MobileMenu.module.css';

const MobileMenu = ({ openModal, onClose }) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const user = useSelector(selectUser);

    return (
        <div className={s.menu}>
            {isLoggedIn && user ? <UserBar /> : <AuthNav openModal={openModal} />}
            <ThemePicker />
            <Navigation onLinkClick={onClose} />
        </div>
    );
};

export default MobileMenu;
