import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchemaValidation } from '../../../validations/registrationFormValidation';

import s from '../Forms.module.css';

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <form className={s.form}>
            <div className={s.wrapper}>
                <input type="text" name="name" placeholder="Name" className={s.input} />
                <input type="email" name="email" placeholder="Email" className={s.input} />
                <div className={s.fieldPassword}>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className={s.input} />
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
