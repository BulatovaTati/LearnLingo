import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <Link className={s.logo} to="/">
                <svg width={28} height={28}>
                    <use href="/logo.svg"></use>
                </svg>
                <p>LearnLingo</p>
            </Link>
        </>
    );
};

export default Logo;
