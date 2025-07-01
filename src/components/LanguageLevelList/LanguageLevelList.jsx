import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import s from './LanguageLevelList.module.css';

const LanguageLevelList = ({ levels }) => {
    const { level: selectedLevel } = useSelector(selectFilter);

    return (
        <ul className={s.languageLevelList}>
            {Object.values(levels).map(level => (
                <li
                    key={level}
                    className={clsx(s.languageLevelListItem, {
                        [s.active]: selectedLevel?.value === level,
                    })}
                >
                    #{level}
                </li>
            ))}
        </ul>
    );
};

export default LanguageLevelList;
