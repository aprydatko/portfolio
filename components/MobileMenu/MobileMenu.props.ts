export interface MenuItemProps {
	id: number;
	hash?: string | null;
	url?: string;
	toggleMenu?: () => boolean;
}

export interface MenuProps {
	openMenu: boolean;
}