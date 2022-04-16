// Providers.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../theme";

export const Providers: React.FC = ({ children }) => {
    const { value } = useDarkMode(false);
    const theme = value ? darkTheme : lightTheme;

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{body}</div>;
    }

    return body;
};
