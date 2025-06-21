import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemePicker from '../ThemePicker/ThemePicker';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Container modClass={s.headerContainer}>
                <Logo />
                <Navigation />
                <ThemePicker />
                <AuthNav />
            </Container>
        </header>
    );
};

export default Header;
