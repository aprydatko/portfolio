import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
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

    // console.log("[theme]:", theme);
    // console.log("[activeTheme]:", activeTheme);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sorts+Mill+Goudy:ital@0;1&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            {activeTheme && (
                <ThemeProvider theme={lightTheme}>
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
            )}
        </>
    );
}
export default MyApp;
