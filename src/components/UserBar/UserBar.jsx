import { useDispatch, useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { logOut } from '../../redux/auth/operations.js';
import { resetFavorites } from '../../redux/teachers/slice.js';
import { selectUser } from '../../redux/auth/selectors.js';

const UserBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.content}>
            <p className={s.text}>
                Hello! <span>{user.name}</span>
            </p>
            <button
                className={s.btn}
                type="button"
                onClick={() => {
                    dispatch(logOut());
                    dispatch(resetFavorites());
                }}
            >
                LogOut
            </button>
        </div>
    );
};

export default UserBar;
