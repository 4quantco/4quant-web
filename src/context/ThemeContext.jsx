import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Force dark mode permanently
    const [theme] = useState('dark');

    useEffect(() => {
        const root = document.documentElement;
        // Always set to dark mode
        root.classList.add('dark');
        root.classList.remove('light');
    }, []);

    // toggleTheme is now a no-op since we're forcing dark mode
    const toggleTheme = () => { };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
