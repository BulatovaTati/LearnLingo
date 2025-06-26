import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
    return (
        <>
            <img className={s.image} src="/images/sad-girl.png" alt="Sad Girl" />
            <p className={s.errorMessage}>{message}</p>
        </>
    );
};

export default ErrorMessage;
