export interface MenuItemProps {
    id: number;
    openMenu: boolean;
    hash?: string | null;
    url?: string;
    toggleMenu: () => void;
}

export interface MobileMenuProps {
    theme: "light" | "dark";
    openMenu: boolean;
    toggleTheme: (theme: string) => void;
    toggleMenu: () => void;
}
