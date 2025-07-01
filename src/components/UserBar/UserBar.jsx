import { useDispatch, useSelector } from 'react-redux';
import s from './UserBar.module.css';

import CustomButton from '../CustomButton/CustomButton';
import { logOut } from '../../redux/auth/operations';
import { resetFavorites } from '../../redux/teachers/slice';
import { selectUser } from '../../redux/auth/selectors';

const UserBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleClick = () => {
        dispatch(logOut());
        dispatch(resetFavorites());
    };

    return (
        <div className={s.content}>
            <p>
                Hello! <span className={s.name}>{user.name}</span>
            </p>
            <CustomButton modClass={s.logOut} fn={handleClick}>
                LogOut
            </CustomButton>
        </div>
    );
};

export default UserBar;
