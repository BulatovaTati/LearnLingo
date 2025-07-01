import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { bookingValidationSchema } from '../../../validations/bookingValidationSchema';
import CustomButton from '../../CustomButton/CustomButton';
import { showToast } from '../../CustomToaster/CustomToaster';
import { options } from '../../../constants/bookingFromOptions';

import s from '../Forms.module.css';

const BookForm = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(bookingValidationSchema),
        defaultValues: {
            answer: 'Career and business',
            name: '',
            email: '',
            number: '',
        },
    });

    const onSubmit = async data => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            showToast('success', 'Form submitted successfully!');
            reset();
            onClose();
        } catch (e) {
            showToast('error', 'Smt went wrong!');
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={s.fieldset}>
                <legend className={s.questionText}>What is your main reason for learning English?</legend>
                <Controller
                    name="answer"
                    control={control}
                    render={({ field }) => (
                        <div className={s.radioGroup}>
                            {options.map(option => (
                                <label key={option} className={s.radioLabel}>
                                    <input type="radio" value={option} checked={field.value === option} onChange={field.onChange} className={s.radioInput} />
                                    <span className={s.customRadio}></span>
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                />
            </fieldset>
            <div className={s.wrapper}>
                <div className={s.inputGroup}>
                    <input type="text" name="name" placeholder="Full Name" {...register('name')} className={s.input} />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}
                </div>

                <div className={s.inputGroup}>
                    <input type="text" name="email" placeholder="Email" {...register('email')} className={s.input} />
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}
                </div>

                <div className={s.inputGroup}>
                    <input type="tel" name="number" placeholder="Phone number" {...register('number')} className={s.input} />
                    {errors.number && <p className={s.error}>{errors.number.message}</p>}
                </div>
            </div>

            <CustomButton type="submit" modClass={s.modalBtn}>
                Book
            </CustomButton>
        </form>
    );
};

export default BookForm;
