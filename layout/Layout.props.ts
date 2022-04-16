import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
    theme: "light" | "dark";
    openMenu: boolean;
    toggleTheme: (theme: string) => void;
    toggleMenu: () => void;
}
