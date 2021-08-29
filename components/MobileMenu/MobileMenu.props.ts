export interface MenuItemProps {
	id: number;
	hash: string;
	t: (string: string) => string;
}

export interface MenuProps {
	openMenu: boolean;
}