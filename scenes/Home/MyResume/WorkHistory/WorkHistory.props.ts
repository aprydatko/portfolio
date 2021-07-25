export interface ExpertiseProps {
	index: number;
	t: (string: string) => string;
}

export interface ExperienceProps {
	index: number;
	t: (string: string) => string;
}

export interface AwardsProps {
	date: string;
	place: string;
	description: string;
}

export interface EducationProps {
	t: (string: string) => string;
}

export interface WorkHistory {
	education: EducationProps[];
	expertise: string[];
	awards: AwardsProps[];
	expirience: ExperienceProps[];
}

export interface WorkHistoryProps {
	data?: WorkHistory;
}