import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../ThemeContext/ThemeContext';
import ModalLogIn from '../Modals/ModalLogIn';
import ModalRegistration from '../Modals/ModalRegistration';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

const Layout = () => {
    const [modalType, setModalType] = useState(null);

    const { theme } = useTheme();

    const openModal = type => setModalType(type);
    const closeModal = () => setModalType(null);

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <>
            <Toaster />
            <Suspense fallback={<Loader />}>
                <Header openModal={openModal} />
                <main>
                    <Outlet context={{ openModal }} />
                </main>
            </Suspense>

            <ModalLogIn isOpen={modalType === 'login'} onClose={closeModal} />
            <ModalRegistration isOpen={modalType === 'register'} onClose={closeModal} />
        </>
    );
};

export default Layout;
