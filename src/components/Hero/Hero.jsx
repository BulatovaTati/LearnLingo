import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';
import Section from '../Section/Section';
import s from './Hero.module.css';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <Section className={s.section}>
            <div className={s.heroContainer}>
                <div className={s.firstContainer}>
                    <h1 className={s.title}>
                        Unlock your potential with the best <span className={s.titleAccent}>language</span> tutors
                    </h1>
                    <p className={s.descr}>
                        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your <span>language</span> proficiency to new heights by connecting with highly qualified and
                        experienced tutors.
                    </p>
                    <Link to="/teachers" className={s.btn}>
                        Get started
                    </Link>
                </div>
                <div className={s.secondContainer}>
                    <img className={s.girlImage} src="/images/girl.png" alt="girl" />
                    <img className={s.iMacImage} src={`/images/iMac-${theme}.png`} alt={`iMac in ${theme}`} />
                </div>
            </div>
        </Section>
    );
};

export default Hero;
