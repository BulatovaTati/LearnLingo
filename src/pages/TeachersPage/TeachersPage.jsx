import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import TeachersList from '../../components/TeachersList/TeachersList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Filter from '../../components/Filter/Filter';

import { selectLoading, selectTeachers, selectVisibleTeachers } from '../../redux/teachers/selectors';
import { fetchTeachers } from '../../redux/teachers/operations';
import { changeVisibleTeachers } from '../../redux/teachers/slice';
import { useMedia } from '../../hooks/useMedia';

import s from './TeachersPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';

const TeachersPage = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeachers);
    const { current } = useMedia();
    const visibleTeachers = useSelector(selectVisibleTeachers);
    const isLoading = useSelector(selectLoading);

    const firstTeacherRef = useRef(null);

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    const handleLoadMore = () => {
        dispatch(changeVisibleTeachers(visibleTeachers + 4));

        setTimeout(() => {
            if (firstTeacherRef.current) {
                let multiplier;
                switch (current) {
                    case 'mobile':
                        multiplier = 0.5;
                        break;
                    case 'tablet':
                        multiplier = 0.7;
                        break;
                    case 'desktop':
                    default:
                        multiplier = 1.2;
                        break;
                }

                const { height: cardHeight } = firstTeacherRef.current.getBoundingClientRect();

                window.scrollBy({
                    top: cardHeight * multiplier,
                    behavior: 'smooth',
                });
            }
        }, 100);
    };

    return (
        <Section modClass={s.section}>
            <Container>
                <Filter />
                <TeachersList teachers={teachers} firstTeacherRef={firstTeacherRef} />
                {teachers.length === 0 && !isLoading && <ErrorMessage message={' No teachers found'} />}
                {visibleTeachers < teachers.length && !isLoading && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
            </Container>
        </Section>
    );
};

export default TeachersPage;
