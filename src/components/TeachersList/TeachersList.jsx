import { useSelector } from 'react-redux';
import s from './TeachersList.module.css';
import { selectTeachers, selectVisibleTeachers } from '../../redux/teachers/selectors';
import TeacherItem from '../TeacherItem/TeacherItem';

const TeachersList = () => {
    const teachers = useSelector(selectTeachers);
    const visibleTeachers = useSelector(selectVisibleTeachers);
    return <ul className={s.list}>{teachers.length > 0 && teachers.slice(0, visibleTeachers).map(teacher => <TeacherItem key={teacher.id} teacher={teacher} />)}</ul>;
};

export default TeachersList;
