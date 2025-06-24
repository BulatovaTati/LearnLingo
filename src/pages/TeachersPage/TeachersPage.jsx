import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import TeachersList from '../../components/TeachersList/TeachersList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { changeVisibleTeachers } from '../../redux/teachers/slice';
import { fetchFavoriteTeachers, fetchTeachers } from '../../redux/teachers/operations';
import { selectFavoriteTeachers, selectLoading, selectTeachers, selectVisibleTeachers } from '../../redux/teachers/selectors';
import { selectUser } from '../../redux/auth/selectors';
import s from './TeachersPage.module.css';

const TeachersPage = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeachers);

    const visibleTeachers = useSelector(selectVisibleTeachers);
    const favoriteTeachers = useSelector(selectFavoriteTeachers);
    const isLoading = useSelector(selectLoading);
    const user = useSelector(selectUser);

    useEffect(() => {
        dispatch(fetchTeachers());
        if (user && favoriteTeachers.length === 0) {
            dispatch(fetchFavoriteTeachers());
        }
    }, [dispatch]);

    const handleLoadMore = () => {
        dispatch(changeVisibleTeachers(visibleTeachers + 4));
    };

    return (
        <Section modClass={s.hero}>
            <Container modClass={s.heroContainer}>
                <TeachersList />
                {teachers.length === 0 && !isLoading && <ErrorMessage message={' No teachers found'} />}
                {visibleTeachers < teachers.length && !isLoading && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
            </Container>
        </Section>
    );
};

export default TeachersPage;
