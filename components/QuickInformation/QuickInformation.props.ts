interface QuickInformation {
	id: number;
	headline: string;
	text: string;
}

export interface QuickInformationProps {
	data?: QuickInformation[];
	section: string;
	subsection: string;
	count: number;
	className?: string;
}