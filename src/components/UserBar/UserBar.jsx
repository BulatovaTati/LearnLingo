import { useDispatch, useSelector } from 'react-redux';
import s from './UserBar.module.css';

import { logOut } from '../../redux/auth/operations';
import { resetFavorites } from '../../redux/teachers/slice';
import { selectUser } from '../../redux/auth/selectors';

const UserBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.content}>
            <p>
                Hello! <span className={s.name}>{user.name}</span>
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
