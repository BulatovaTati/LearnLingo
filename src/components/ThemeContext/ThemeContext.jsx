import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getStoredTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(getStoredTheme || 'yellow');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
