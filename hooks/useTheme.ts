import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("light");
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode: string): void => {
        localStorage.setItem("theme", mode);
        setTheme(mode);
        // setActiveTheme(activeTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme ? setMode(localTheme) : setMode("light");
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode };
};
