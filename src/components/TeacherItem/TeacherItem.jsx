import TeacherSummary from '../TeacherSummary/TeacherSummary';
import LanguageLevelList from '../LanguageLevelList/LanguageLevelList';
import DescriptionList from '../DescriptionList/DescriptionList';

import ReadMore from '../ReadMore/ReadMore';
import s from './TeacherItem.module.css';

const TeacherItem = ({ teacher }) => {
    const { name, surname, levels, avatar_url, reviews, experience } = teacher;

    return (
        <li className={s.card}>
            <div className={s.avatarWrapper}>
                <div className={s.avatar}>
                    <img src={avatar_url} className={s.image} alt={name} width={96} height={96} />
                </div>
            </div>
            <div className={s.content}>
                <TeacherSummary teacher={teacher} />
                <p className={s.name}>
                    {name} {surname}
                </p>
                <DescriptionList {...teacher} />
                <ReadMore experience={experience} reviews={reviews} />
                <LanguageLevelList levels={levels} />
            </div>
        </li>
    );
};

export default TeacherItem;
