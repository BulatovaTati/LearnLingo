import { useSelector } from 'react-redux';
import s from './TeachersList.module.css';
import { selectTeachers } from '../../redux/teachers/selectors';

const TeachersList = () => {
    const teachers = useSelector(selectTeachers);

    return (
        <ul className={s.list}>
            {teachers.length > 0 &&
                teachers.map(teacher => (
                    <li key={teacher.id}>
                        <TeacherItem teacher={teacher} {...teacher} />
                    </li>
                ))}
        </ul>
    );
};

export default TeachersList;
