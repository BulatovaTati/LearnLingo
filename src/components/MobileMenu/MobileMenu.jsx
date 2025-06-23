import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import ThemePicker from '../ThemePicker/ThemePicker';
import s from './MobileMenu.module.css';

const MobileMenu = ({ openModal, onClose }) => {
    return (
        <div className={s.menu}>
            <AuthNav openModal={openModal} />
            <ThemePicker />
            <Navigation onLinkClick={onClose} />
        </div>
    );
};

export default MobileMenu;
