import { useTheme } from '../ThemeContext/ThemeContext';
import s from './ThemePicker.module.css';

const themes = ['yellow', 'green', 'blue', 'pink', 'orange'];

const ThemePicker = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={s.themePicker}>
            {themes.map(t => (
                <div key={t} title={t} onClick={() => setTheme(t)} className={`${s[`dot--${t}`]} ${theme === t ? s.active : ''}`} />
            ))}
        </div>
    );
};

export default ThemePicker;
