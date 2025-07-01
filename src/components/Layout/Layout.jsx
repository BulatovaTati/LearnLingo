import { useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useTheme } from '../ThemeContext/ThemeContext';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import ModalBook from '../Modals/ModalBook';
import ModalLogIn from '../Modals/ModalLogIn';
import ModalRegistration from '../Modals/ModalRegistration';
import useModal from '../../hooks/useModal';
import { selectIsLoading } from '../../redux/auth/selectors';

const Layout = () => {
    const isLoading = useSelector(selectIsLoading);
    const { theme } = useTheme();
    const { modalType, modalData, openModal, closeModal } = useModal();

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    if (isLoading) {
        return <Loader />;
    }

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
            <ModalBook isOpen={modalType === 'booking'} onClose={closeModal} {...modalData} />
        </>
    );
};

export default Layout;
