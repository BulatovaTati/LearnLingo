import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { showToast } from '../CustomToaster/CustomToaster';

import { selectFavoriteTeachers } from '../../redux/teachers/selectors';
import { selectLoggedIn } from '../../redux/auth/selectors';
import { addAndRemoveFavoriteTeacher } from '../../redux/teachers/slice';

import s from './FavoriteBtn.module.css';

const FavoriteBtn = ({ teacher }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);
    const favoriteTeachers = useSelector(selectFavoriteTeachers);
    const isFavorite = teacher && favoriteTeachers.some(t => t.id === teacher.id);

    const handleClick = () => {
        if (!teacher) return;
        if (!isLoggedIn) {
            showToast('error', 'This functionality is available only to authorized users.');
            return;
        }

        dispatch(addAndRemoveFavoriteTeacher(teacher));
    };

    return (
        <button type="button" className={s.btnFavorite} onClick={handleClick} aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}>
            {isFavorite ? <MdFavorite className={clsx(s.icon, s.isFavorite)} size={26} /> : <MdFavoriteBorder className={s.icon} size={26} />}
        </button>
    );
};

export default FavoriteBtn;
