import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import s from './HomePage.module.css';

const HomePage = () => {
    return (
        <Section modClass={s.hero}>
            <Container modClass={s.heroContainer}>
                <h1 className={s.title}>TITLE</h1>
                <p className={s.text}>TEXT</p>
            </Container>
        </Section>
    );
};

export default HomePage;
