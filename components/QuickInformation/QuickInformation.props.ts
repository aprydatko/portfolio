interface QuickInformation {
	id: number;
	headline: string;
	text: string;
}

export interface QuickInformationProps {
	data: QuickInformation[];
	className?: string;
}