export interface ProjectComponentProps {
	index: number;
	t: (string: string) => string;
}

export interface FullImgComponentProps {
	index: number;
	handleImgOrigin: () => void;
}