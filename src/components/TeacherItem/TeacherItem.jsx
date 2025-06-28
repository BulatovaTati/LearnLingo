import TeacherSummary from '../TeacherSummary/TeacherSummary';
import DescriptionList from '../DescriptionList/DescriptionList';
import ReadMore from '../ReadMore/ReadMore';
import s from './TeacherItem.module.css';

const TeacherItem = ({ teacher }) => {
    const { name, surname, avatar_url } = teacher;

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
                <ReadMore {...teacher} />
            </div>
        </li>
    );
};

export default TeacherItem;
