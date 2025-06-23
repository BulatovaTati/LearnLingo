import * as yup from 'yup';

export const registrationSchemaValidation = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().min(7).required(),
    })
    .required();
