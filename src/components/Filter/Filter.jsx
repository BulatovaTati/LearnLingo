import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

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
                <Controller
                    name="lang"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            styles={customStylesLang}
                            options={langOptions}
                            value={field.value || null}
                            isClearable={true}
                            placeholder="Select language"
                            onChange={option => {
                                field.onChange(option);
                                handleFilterChange('lang', option);
                            }}
                        />
                    )}
                />
            </div>

            <div>
                <label className={s.fieldLabel}>Level of knowledge</label>
                <Controller
                    name="level"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            styles={customStylesLevel}
                            options={levelOptions}
                            value={field.value || null}
                            isClearable={true}
                            placeholder="Select level"
                            onChange={option => {
                                field.onChange(option);
                                handleFilterChange('level', option);
                            }}
                        />
                    )}
                />
            </div>

            <div>
                <label className={s.fieldLabel}>Price</label>
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            styles={customStylesPrice}
                            options={priceOptions}
                            value={field.value || null}
                            isClearable={true}
                            placeholder="Select price"
                            onChange={option => {
                                field.onChange(option);
                                handleFilterChange('price', option);
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default Filter;
