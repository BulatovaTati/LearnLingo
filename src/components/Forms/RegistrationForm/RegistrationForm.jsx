import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registerUser } from '../../../redux/auth/operations';
import { registrationSchemaValidation } from '../../../validations/registrationFormValidation';

import s from '../Forms.module.css';

const RegistrationForm = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchemaValidation),
    });

    const onSubmit = data => {
        dispatch(registerUser(data))
            .unwrap()
            .then(() => onClose());
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.wrapper}>
                <div className={s.inputGroup}>
                    <input type="text" name="name" placeholder="Name" className={s.input} {...register('name')} />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}
                </div>
                <div className={s.inputGroup}>
                    <input type="email" name="email" placeholder="Email" className={s.input} {...register('email')} />
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}
                </div>
                <div className={s.inputGroup}>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className={s.input} {...register('password')} />
                    {errors.password && <p className={s.error}>{errors.password.message}</p>}
                    <button type="button" className={s.btnIcon} onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye className={s.iconEye} size={20} /> : <FaEyeSlash className={s.iconEye} size={20} />}
                    </button>
                </div>
            </div>
            <button type="submit" className={s.btn}>
                Sign Up
            </button>
        </form>
    );
};

export default RegistrationForm;
