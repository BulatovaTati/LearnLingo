import { RotatingLines, ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.loaderBackdrop}>
            <div className={s.spinnerWrapper}>
                <ThreeCircles visible={true} height="100" width="100" color="#ffffff" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        </div>
    );
};

export default Loader;
