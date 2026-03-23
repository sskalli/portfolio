export interface Experience {
	id: number;
	role: string;
	company: string;
	years: string;
	description: string;
	achievements: string[];
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: 'Front-end Developer',
		company: 'Caldera (Eckbolsheim, France)',
		years: '05/2023 - Present',
		description:
			'Lead front-end developer across multiple teams building complex printing softwares with a focus on quality and sustainability',
		achievements: [
			'Led development across several teams on printing software projects using Vue.js and Electron',
			'Facilitated technical discussions to enforce coding standards and quality assurance practices across projects',
			'Refactored legacy codebases to improve architecture, readability, and long-term maintainability across three products',
			'Mentored a front-end developer apprentice',
		],
	},
	{
		id: 2,
		role: 'Full Stack Web Developer Contractor (for Elilly & Co)',
		company: 'Capgemini (Strasbourg, France)',
		years: '03/2021 - 05/2023',
		description:
			'Developed GMP web applications and contributed as a technical lead in an international team',
		achievements: [
			'Developed several Good Manufacturing Practices web applications using Angular, TypeScript, Docker, OpenShift, and Redis',
			'Served as technical lead in an international team to ensure best practices and QA standards were consistently met',
			'Built two Proof-of-Concept applications that were successfully transitioned to full production use across the company',
		],
	},
	{
		id: 3,
		role: 'Full Stack Web Developer',
		company: '/gebruederheitz (Mannheim, Germany)',
		years: '10/2018 - 10/2019',
		description: 'Developed web applications and contributed to sustainable engineering practices',
		achievements: [
			'Developed a web application published and used through the GitHub Marketplace using React, Node.js, and TypeScript',
			'Participated in discussions to improve organizational practices and support clean, durable code development in a Teal organization framework',
		],
	},
];
