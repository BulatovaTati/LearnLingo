import { IoMdBook } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';

import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import s from './TeacherSummary.module.css';

const TeacherSummary = ({ teacher }) => {
    const { lessons_done, rating, price_per_hour } = teacher;
    return (
        <div className={s.wrapper}>
            <span className={s.label}>Languages</span>
            <ul className={s.statisticsList}>
                <li className={s.statisticsListItem}>
                    <IoMdBook size={17} />
                    Lessons online
                </li>
                <li className={s.statisticsListItem}>Lessons done: {lessons_done}</li>
                <li className={s.statisticsListItem}>
                    <IoMdStar className={s.starIcon} size={17} />
                    Rating: {rating}
                </li>
                <li className={s.statisticsListItem}>
                    Price / 1 hour:<span className={s.price}>{price_per_hour}$</span>
                </li>
            </ul>
            <FavoriteBtn teacher={teacher} />
        </div>
    );
};

export default TeacherSummary;
