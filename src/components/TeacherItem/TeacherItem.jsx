import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ModalBookTrialLesson from '../ModalBookTrialLesson/ModalBookTrialLesson';
import { addAndRemoveFavoriteTeacher } from '../../redux/teachers/operations';
import { selectLoggedIn } from '../../redux/auth/selectors';
import s from './TeacherItem.module.css';

const TeacherItem = ({ name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience }) => {
    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const isLoggedIn = useSelector(selectLoggedIn);

    const handleCloseModal = () => setIsOpen(false);

    const handleOpenModal = () => setIsOpen(true);

    return (
        <li className={s.card}>
            <div className={s.avatarWrapper}>
                <div className={s.circle}></div>
                <img src={avatar_url} alt={name} className={s.avatar} width={96} height={96} />
            </div>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <span className={s.label}>Languages</span>
                    <ul className={s.statisticsList}>
                        <li className={s.statisticsListItem}>Lessons online</li>
                        <li className={s.statisticsListItem}>Lessons done: {lessons_done}</li>
                        <li className={s.statisticsListItem}>Rating: {rating}</li>
                        <li className={s.statisticsListItem}>
                            Price / 1 hour: <span>{price_per_hour}$</span>
                        </li>
                    </ul>
                    <button type="button" className={s.btnFvorite}></button>
                </div>
                <p className={s.name}>
                    {name} {surname}
                </p>
                <ul className={s.descriptionList}>
                    <li className={s.descriptionListItem}>
                        <p>
                            <span>Speaks:</span> <span className={s.languages}>{Object.keys(languages).join(', ').replace('_', ' ')}</span>
                        </p>
                    </li>
                    <li className={s.descriptionListItem}>
                        <p>
                            <span>Lesson Info:</span> {lesson_info}.
                        </p>
                    </li>
                    <li className={s.descriptionListItem}>
                        <p>
                            <span>Conditions:</span> {conditions.join(' ')}
                        </p>
                    </li>
                </ul>
                {isHidden && (
                    <button
                        type="button"
                        className={s.btnReadMore}
                        onClick={() => {
                            setIsHidden(!isHidden);
                        }}
                    >
                        Read more
                    </button>
                )}
            </div>
        </li>
    );
};

export default TeacherItem;
