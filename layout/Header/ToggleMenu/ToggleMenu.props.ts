export interface ToggleMenuProps {
	state: 'open' | 'close';
}

export interface MenuItemProps {
	id: number;
	hash: string;
	t: (string: string) => string;
}