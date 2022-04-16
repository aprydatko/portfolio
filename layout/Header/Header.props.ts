import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    theme: "light" | "dark";
    openMenu: boolean;
    toggleTheme: (theme: string) => void;
    toggleMenu: () => void;
}
