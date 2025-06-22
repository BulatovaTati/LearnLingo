import { NavLink } from 'react-router-dom';
import buildLinkClass from './buildLinkClass';
import s from './Navigation.module.css';

const Navigation = ({ onLinkClick }) => {
    const handleClick = () => {
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className={s.navList}>
            <NavLink to="/" className={buildLinkClass} onClick={handleClick}>
                Home
            </NavLink>
            <NavLink to="/teachers" className={buildLinkClass} onClick={handleClick}>
                Teachers
            </NavLink>
        </nav>
    );
};

export default Navigation;
