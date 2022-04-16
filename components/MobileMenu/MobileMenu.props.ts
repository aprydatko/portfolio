export interface MenuItemProps {
    id: number;
    openMenu: boolean;
    hash: string | null;
    url: string;
    toggleMenu: () => boolean;
}

export interface MobileMenuProps {
    theme: "light" | "dark";
    openMenu: boolean;
    toggleTheme: (theme: string) => void;
    toggleMenu: () => void;
}
