import { Controller as RHController } from 'react-hook-form';
import Select from 'react-select';

const Controller = ({ name, control, options, styles, placeholder = 'Select…', onChange }) => (
    <RHController
        name={name}
        control={control}
        render={({ field }) => (
            <Select
                {...field}
                styles={styles}
                options={options}
                value={field.value || null}
                isClearable={true}
                placeholder={placeholder}
                onChange={option => {
                    field.onChange(option);
                    onChange && onChange(name, option);
                }}
            />
        )}
    />
);

export default Controller;
