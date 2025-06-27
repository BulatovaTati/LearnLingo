import s from './LanguageLevelList.module.css';

const LanguageLevelList = ({ levels }) => {
    return (
        <ul className={s.languageLevelList}>
            {Object.values(levels).map(level => (
                <li key={level} className={s.languageLevelListItem}>
                    #{level}
                </li>
            ))}
        </ul>
    );
};

export default LanguageLevelList;
