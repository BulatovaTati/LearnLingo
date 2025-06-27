import s from './DescriptionList.module.css';

const DescriptionList = ({ languages, lesson_info, conditions }) => {
    return (
        <ul className={s.descriptionList}>
            <li className={s.descriptionListItem}>
                <p>
                    <span className={s.title}>Speaks:</span> <span className={s.languages}>{Object.values(languages).join(', ').replace('_', ' ')}</span>
                </p>
            </li>
            <li className={s.descriptionListItem}>
                <p>
                    <span className={s.title}>Lesson Info:</span> {lesson_info}
                </p>
            </li>
            <li className={s.descriptionListItem}>
                <p>
                    <span className={s.title}>Conditions:</span> {conditions.join(' ')}
                </p>
            </li>
        </ul>
    );
};

export default DescriptionList;
