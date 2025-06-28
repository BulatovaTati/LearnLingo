import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import TeachersList from '../../components/TeachersList/TeachersList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import s from './TeachersPage.module.css';
import { selectLoading, selectTeachers, selectVisibleTeachers } from '../../redux/teachers/selectors';
import { fetchTeachers } from '../../redux/teachers/operations';
import { changeVisibleTeachers } from '../../redux/teachers/slice';

const TeachersPage = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeachers);

    const visibleTeachers = useSelector(selectVisibleTeachers);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [dispatch]);

    const handleLoadMore = () => dispatch(changeVisibleTeachers(visibleTeachers + 4));

    return (
        <Section modClass={s.section}>
            <Container>
                <TeachersList teachers={teachers} />
                {teachers.length === 0 && !isLoading && <ErrorMessage message={' No teachers found'} />}
                {visibleTeachers < teachers.length && !isLoading && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
            </Container>
        </Section>
    );
};

export default TeachersPage;
