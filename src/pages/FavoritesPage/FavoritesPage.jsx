import { useSelector } from 'react-redux';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import TeachersList from '../../components/TeachersList/TeachersList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectFavoriteTeachers, selectLoading } from '../../redux/teachers/selectors';

const FavoritesPage = () => {
    const isLoading = useSelector(selectLoading);
    const favoriteTeachers = useSelector(selectFavoriteTeachers);

    return (
        <Section>
            <Container>
                <TeachersList teachers={favoriteTeachers} />
                {favoriteTeachers.length === 0 && !isLoading && <ErrorMessage message={' No favorite teachers found'} />}
            </Container>
        </Section>
    );
};

export default FavoritesPage;
