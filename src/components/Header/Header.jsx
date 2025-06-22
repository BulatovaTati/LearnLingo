import { RiMenuFoldFill } from 'react-icons/ri';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemePicker from '../ThemePicker/ThemePicker';
import MobileMenu from '../MobileMenu/MobileMenu';

import s from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1279.98 });
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className={s.header}>
            <Container modClass={s.headerContainer}>
                <Logo />

                {isMobileOrTablet && (
                    <button className={s.btn} type="button" onClick={toggleMenu}>
                        <RiMenuFoldFill />
                    </button>
                )}

                {isDesktop && (
                    <>
                        <Navigation />
                        <ThemePicker />
                        <AuthNav />
                    </>
                )}
            </Container>

            {isMenuOpen && !isDesktop && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
        </header>
    );
};

export default Header;
