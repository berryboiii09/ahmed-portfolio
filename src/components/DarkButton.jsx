import { useState, useEffect } from 'react';
import { Sun, Moon} from 'lucide-react'

export default function DarkModeButton() {
    const [isDark, setIsDark] = useState(false);

    /* Set initial theme */
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    /* Toggle Theme */
    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button onClick={toggleDarkMode} aria-label="theme toggle" className="hover:text-violet-600 transition-colors duration-300 cursor-pointer">
            {isDark ? <Moon/> : <Sun/>}
        </button>
    );
}