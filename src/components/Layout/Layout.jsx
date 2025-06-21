import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { useTheme } from '../ThemeContext/ThemeContext';

const Layout = () => {
    const { theme } = useTheme();

    return (
        <div className={`theme-${theme}`}>
            <Toaster />
            <Suspense fallback={<Loader />}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </div>
    );
};

export default Layout;
