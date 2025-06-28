import * as yup from 'yup';

export const bookingValidationSchema = yup
    .object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        number: yup
            .string()
            .required('Phone number is required')
            .matches(/^[+]?[\d\s\-()]{7,}$/, 'Enter a valid phone number'),
    })
    .required();
