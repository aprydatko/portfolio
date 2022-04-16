export interface ToggleThemeProps {
    theme: "light" | "dark";
    toggleTheme: (theme: string) => void;
}
