export interface MenuItemProps {
	id: number;
	openMenu?: boolean;
	hash?: string | null;
	url?: string;
	toggleMenu?: () => boolean;
}

export interface MobileMenuProps {
	openMenu?: boolean;
	toggleMenu?: () => any;
	// theme?: string;
	toggleTheme?: () => void;
}