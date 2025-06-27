import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchemaValidation } from '../../../validations/loginFormValidation';
import { logIn } from '../../../redux/auth/operations';

import s from '../Forms.module.css';

const LogInForm = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(logInSchemaValidation),
    });

    const onSubmit = data => {
        dispatch(logIn(data))
            .unwrap()
            .then(() => onClose());
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.wrapper}>
                <input type="text" name="email" placeholder="Email" className={s.input} {...register('email')} />
                <div className={s.fieldPassword}>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className={s.input} {...register('password')} />
                    <button type="button" className={s.btnIcon} onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye className={s.iconEye} size={20} /> : <FaEyeSlash className={s.iconEye} size={20} />}
                    </button>
                </div>
            </div>
            <button type="submit" className={s.btn}>
                Log In
            </button>
        </form>
    );
};

export default LogInForm;
