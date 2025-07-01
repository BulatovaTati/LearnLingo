import s from './CustomButton.module.css';

const CustomButton = ({ children, fn = null, type = 'button', modClass }) => {
    return (
        <button className={`${s.btn} ${modClass}`} type={type} onClick={fn}>
            {children}
        </button>
    );
};

export default CustomButton;
