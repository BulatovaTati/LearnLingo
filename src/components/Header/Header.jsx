import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TbMenuOrder } from 'react-icons/tb';

import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemePicker from '../ThemePicker/ThemePicker';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserBar from '../UserBar/UserBar';

import { selectLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useMedia } from '../../hooks/useMedia';

import s from './Header.module.css';

const Header = ({ openModal }) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const user = useSelector(selectUser);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDesktop, isMobileOrTablet } = useMedia();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className={s.header}>
            <Container modClass={s.headerContainer}>
                <Logo />

                {isMobileOrTablet && (
                    <button className={s.btn} type="button" onClick={toggleMenu}>
                        <TbMenuOrder size={20} />
                    </button>
                )}

                {isDesktop && (
                    <>
                        <Navigation />
                        <ThemePicker />
                        {isLoggedIn && user ? <UserBar /> : <AuthNav openModal={openModal} />}
                    </>
                )}
            </Container>

            {isMenuOpen && !isDesktop && <MobileMenu openModal={openModal} onClose={() => setIsMenuOpen(false)} />}
        </header>
    );
};

export default Header;
