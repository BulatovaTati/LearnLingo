import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import ThemePicker from '../ThemePicker/ThemePicker';
import s from './MobileMenu.module.css';

const MobileMenu = ({ onClose }) => {
    return (
        <div className={s.menu}>
            <AuthNav />
            <ThemePicker />
            <Navigation onLinkClick={onClose} />
        </div>
    );
};

export default MobileMenu;
