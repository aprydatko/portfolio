import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme";

export const useTheme = () => {
    // const [activeTheme, setActiveTheme] = useState(lightTheme);
    const [theme, setTheme] = useState("light");
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode) => {
        const activeTheme = mode === "light" ? lightTheme : darkTheme;
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
