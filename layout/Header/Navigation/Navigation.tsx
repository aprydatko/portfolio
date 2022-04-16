import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { MenuBlock, ThemeBlock, Email, Line } from "./Navigation.styles";

import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ToggleLanguage } from "../../../components";
import { NavigationProps } from "./Navigation.props";

const Navigation = (props: NavigationProps): JSX.Element => {
    const { t } = useTranslation();
    const { theme, openMenu, toggleMenu, toggleTheme } = props;
    const router = useRouter();
    const isHomePage = router.route === "/";
    return (
        <>
            <MenuBlock>
                <AnimatePresence>
                    <div onClick={toggleMenu}>
                        <ToggleMenu state={openMenu ? "open" : "close"} />
                    </div>
                    {(!isHomePage || openMenu) && (
                        <motion.div
                            key="email"
                            initial={{
                                x: "-15%",
                                opacity: 0,
                            }}
                            animate={{
                                x: openMenu ? "0%" : "100%",
                                opacity: 1,
                            }}
                            exit={{
                                x: "-15%",
                                opacity: 0,
                            }}
                        >
                            <Email
                                href={"mailto:" + t(`common:contacts.email`)}
                            >
                                {t(`common:contacts.email`)}
                            </Email>
                        </motion.div>
                    )}
                </AnimatePresence>
            </MenuBlock>
            <ThemeBlock>
                <ToggleLanguage />
                <Line
                    className={theme === "dark" ? "dark-line" : "light-line"}
                />
                <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            </ThemeBlock>
        </>
    );
};

export default Navigation;
