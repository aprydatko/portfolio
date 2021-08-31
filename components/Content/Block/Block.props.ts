export interface BlockProps {
	tag: "h1" | "h2" | "h3" | "h4" | "h5";
	page: string;
	title: string;
	description: string;
	firstBold?: boolean;
	leftBlock?: boolean;
}