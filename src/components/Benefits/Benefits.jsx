import Section from '../Section/Section';
import s from './Benefits.module.css';

const Benefits = () => {
    return (
        <Section modClass={s.benefits}>
            <ul className={s.list}>
                <li className={s.item}>
                    <h3 className={s.title}>
                        32,000 <span className={s.plus}>+</span>
                    </h3>
                    <p className={s.description}>Experienced tutors</p>
                </li>
                <li className={s.item}>
                    <h3 className={s.title}>
                        300,000 <span className={s.plus}>+</span>
                    </h3>
                    <p className={s.description}>5-star tutor reviews</p>
                </li>
                <li className={s.item}>
                    <h3 className={s.title}>
                        120 <span className={s.plus}>+</span>
                    </h3>
                    <p className={s.description}>Subjects taught</p>
                </li>
                <li className={s.item}>
                    <h3 className={s.title}>
                        200 <span className={s.plus}>+</span>
                    </h3>
                    <p className={s.description}>Tutor nationalities</p>
                </li>
            </ul>
        </Section>
    );
};

export default Benefits;
