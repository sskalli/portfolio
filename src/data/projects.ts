export interface Project {
	id: number;
	name: string;
	description: string;
	techStack: string[];
	iconEmoji?: string;
	githubUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'palace',
		iconEmoji: '🧠',
		description:
			'Palace is a personal note-taking web application designed to capture ideas quickly and keep them organized across devices. It combines a mobile-friendly writing experience with Markdown editing, folders, tags, search, and internal note links—making it easy to move from a quick thought to a connected collection of knowledge.',
		techStack: ['React', 'TypeScript', 'PostgreSQL'],
		githubUrl: 'https://github.com/sskalli/palace',
		liveUrl: 'https://brain-palace.vercel.app/',
	},
	{
		id: 2,
		name: 'greenie-central',
		iconEmoji: '🌳',
		description:
			'Little to-do list application built with Next.js and TypeScript. Features include task creation, editing, deletion, and categorization.',
		techStack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
		githubUrl: 'https://github.com/sskalli/greenie-central',
		liveUrl: 'https://greenie-central.vercel.app/',
	},
	{
		id: 3,
		name: 'French wordle fork',
		description:
			'A fork of the French version of the popular wordle game. Work in progress to implement additional features for regulars like myself.',
		techStack: ['Vue', 'TypeScript'],
	},
];
