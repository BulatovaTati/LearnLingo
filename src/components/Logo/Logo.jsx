import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <Link className={s.logo} to="/">
                <svg width={20} height={20} className={s.logoIcon}>
                    <use href="/logo.svg"></use>
                </svg>
                <span>LearnLingo</span>
            </Link>
        </>
    );
};

export default Logo;
