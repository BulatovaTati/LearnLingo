import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchemaValidation } from '../../../validations/loginFormValidation';

import s from '../Forms.module.css';

const LogInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <form className={s.form}>
            <div className={s.wrapper}>
                <input type="text" name="email" placeholder="Email" className={s.input} />
                <div className={s.fieldPassword}>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className={s.input} />
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
