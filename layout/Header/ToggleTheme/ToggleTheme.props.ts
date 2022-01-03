
export interface ToggleThemeProps {
	state: 'light' | 'dark';
	toggleTheme?: (theme: string) => string;
}