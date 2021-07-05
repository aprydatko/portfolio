export interface ExpertiseProps {
	expertiseName: string;
}

export interface ExperienceProps {
	date: string;
	name: string;
	position: string;
	description: string;
}

export interface AwardsProps {
	date: string;
	place: string;
	description: string;
}

export interface EducationProps {
	date: string;
	position: string;
	place: string;
}

export interface WorkHistory {
	education: EducationProps[];
	expertise: string[];
	awards: AwardsProps[];
	expirience: ExperienceProps[];
}

export interface WorkHistoryProps {
	data: WorkHistory;
}