import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
    return (
        <Section modClass={s.hero}>
            <Container modClass={s.heroContainer}>FavoritesPage</Container>
        </Section>
    );
};

export default FavoritesPage;
