import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Controller from './Controller';
import { fetchTeachersByFilter } from '../../redux/teachers/operations';
import { langOptions, levelOptions, priceOptions } from '../../constants/filterOptions';
import { selectFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/slice';
import { customStylesLang } from './customStylesLang';
import { customStylesLevel } from './customStylesLevel';
import { customStylesPrice } from './customStylesPrice';

import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilter);
    const { control } = useForm({ defaultValues: filters });

    const handleFilterChange = (name, option) => {
        const value = option ?? '';

        dispatch(changeFilter({ name, value }));

        dispatch(fetchTeachersByFilter({ ...filters, [name]: value }));
    };

    return (
        <div className={s.wrapper}>
            <div>
                <label className={s.fieldLabel}>Languages</label>
                <Controller name="lang" control={control} options={langOptions} placeholder="Select language" styles={customStylesLang} onChange={handleFilterChange} />
            </div>

            <div>
                <label className={s.fieldLabel}>Level of knowledge</label>
                <Controller name="level" control={control} styles={customStylesLevel} options={levelOptions} placeholder="Select level" onChange={handleFilterChange} />
            </div>

            <div>
                <label className={s.fieldLabel}>Price</label>
                <Controller name="price" control={control} styles={customStylesPrice} options={priceOptions} placeholder="Select price" onChange={handleFilterChange} />
            </div>
        </div>
    );
};

export default Filter;
