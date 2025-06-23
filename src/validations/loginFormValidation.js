import * as yup from 'yup';

export const logInSchemaValidation = yup
    .object({
        email: yup.string().max(50).required(),
        password: yup.string().min(7).required(),
    })
    .required();
