import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../ThemeContext/ThemeContext';

import Loader from '../Loader/Loader';
import Header from '../Header/Header';

const Layout = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <>
            <Toaster />
            <Suspense fallback={<Loader />}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </>
    );
};

export default Layout;
