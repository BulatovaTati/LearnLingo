import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from './Loader/Loader.jsx';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
    const dispatch = useDispatch();
    const { isRefreshing } = useSelector(selectAuth);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    if (isRefreshing) return <Loader />;

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/favorites" element={<PrivateRoute redirectTo="/teachers" component={<FavoritesPage />} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
