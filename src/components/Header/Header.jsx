import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TbMenuOrder } from 'react-icons/tb';

import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemePicker from '../ThemePicker/ThemePicker';
import MobileMenu from '../MobileMenu/MobileMenu';
import ModalLogIn from '../Modals/ModalLogIn';
import ModalRegistration from '../Modals/ModalRegistration';

import s from './Header.module.css';

const Header = () => {
    const [modalType, setModalType] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1279.98 });
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const handleOpenModal = type => setModalType(type);
    const handleCloseModal = () => setModalType(null);

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
                        <AuthNav openModal={handleOpenModal} />
                    </>
                )}
            </Container>

            {isMenuOpen && !isDesktop && <MobileMenu openModal={handleOpenModal} onClose={() => setIsMenuOpen(false)} />}

            <ModalLogIn isOpen={modalType === 'login'} onClose={handleCloseModal} />

            <ModalRegistration isOpen={modalType === 'register'} onClose={handleCloseModal} />
        </header>
    );
};

export default Header;
