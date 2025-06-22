import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import s from './HomePage.module.css';
import Hero from '../../components/Hero/Hero.jsx';

const HomePage = () => {
    return (
        <Section modClass={s.hero}>
            <Container modClass={s.heroContainer}>
                <Hero />
            </Container>
        </Section>
    );
};

export default HomePage;
