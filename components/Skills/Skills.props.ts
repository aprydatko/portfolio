interface Skill {
	id: number;
	name: string;
	percent: number;
}

export interface SkillsProps {
	data: Skill[];
}

export interface SkillCircleProps {
	name: string;
}

export interface PercentLineProps {
	percent: number;
	name: string;
}