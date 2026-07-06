export interface Project {
	id: number;
	name: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'greenie-central',
		description:
			'Little to-do list application built with Next.js and TypeScript. Features include task creation, editing, deletion, and categorization.',
		techStack: [
			'Next.js',
			'React',
			'TypeScript',
			'Prisma',
			'PostgreSQL',
			'Zod',
			'TanStack Query',
			'Tailwind CSS',
		],
		githubUrl: 'https://github.com/sskalli/greenie-central',
		liveUrl: 'https://greenie-central.vercel.app/',
	},
	{
		id: 2,
		name: 'French wordle fork',
		description:
			'A fork of the French version of the popular wordle game. Work in progress to implement additional features for regulars like myself.',
		techStack: ['Vue', 'TypeScript'],
	},
];
