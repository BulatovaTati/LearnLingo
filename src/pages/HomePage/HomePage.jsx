import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import Hero from '../../components/Hero/Hero';
import Benefits from '../../components/Benefits/Benefits';

const HomePage = () => {
    return (
        <Section>
            <Container>
                <Hero />
                <Benefits />
            </Container>
        </Section>
    );
};

export default HomePage;
