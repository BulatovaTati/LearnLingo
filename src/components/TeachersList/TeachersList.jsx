import { useSelector } from 'react-redux';
import s from './TeachersList.module.css';
import { selectVisibleTeachers } from '../../redux/teachers/selectors';
import TeacherItem from '../TeacherItem/TeacherItem';

const TeachersList = ({ teachers, firstTeacherRef }) => {
    const visibleTeachers = useSelector(selectVisibleTeachers);
    return (
        <ul className={s.list}>
            {teachers.length > 0 && teachers.slice(0, visibleTeachers).map((teacher, index) => <TeacherItem key={teacher.id} teacher={teacher} ref={index === 0 ? firstTeacherRef : null} />)}
        </ul>
    );
};

export default TeachersList;
