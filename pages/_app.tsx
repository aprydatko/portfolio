import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../theme/globalStyles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [theme, setTheme] = useState("light");
    const [openMenu, setOpenMenu] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState("en");
    const activeTheme = theme == "light" ? lightTheme : darkTheme;

    const toggleTheme = (theme: string): void => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    };

    const toggleMenu = (): void => {
        setOpenMenu(!openMenu);
    };

    const toggleLanguage = (language: string): void => {
        setActiveLanguage(language);
    };

    return (
        <>
            <ThemeProvider theme={activeTheme}>
                <GlobalStyles />
                <Component
                    toggleMenu={toggleMenu}
                    toggleTheme={toggleTheme}
                    toggleLanguage={toggleLanguage}
                    theme={theme}
                    openMenu={openMenu}
                    language={activeLanguage}
                    {...pageProps}
                />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
