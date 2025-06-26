import { NavLink } from 'react-router-dom';
import buildLinkClass from './buildLinkClass';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/selectors.js';

const Navigation = ({ onLinkClick }) => {
    const isLoggedIn = useSelector(selectLoggedIn);

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

            {isLoggedIn && (
                <NavLink className={buildLinkClass} to="/favorites" onClick={handleClick}>
                    Favorites
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
