import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NavigationProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    theme: "dark" | "light";
    openMenu: boolean;
    toggleTheme: (theme: string) => void;
    toggleMenu: () => void;
}
