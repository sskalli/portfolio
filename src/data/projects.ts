export interface Project {
	id: number;
	name: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveUrl: string;
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce platform built with React and Node.js. Features include product catalog, shopping cart, payment integration, and admin dashboard. Implemented caching strategies that reduced API response times by 40%.',
		techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
		githubUrl: 'https://github.com',
		liveUrl: 'https://example.com',
	},
	{
		id: 2,
		name: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates using WebSockets. Built with Next.js and MongoDB. Supports multiple workspaces, team collaboration, and automated workflows.',
		techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
		githubUrl: 'https://github.com',
		liveUrl: 'https://example.com',
	},
	{
		id: 3,
		name: 'Analytics Dashboard',
		description:
			'Real-time analytics dashboard displaying metrics across multiple data sources. Implemented complex data visualization with interactive charts and customizable widgets for enterprise clients.',
		techStack: ['React', 'D3.js', 'Express', 'Redis', 'AWS S3'],
		githubUrl: 'https://github.com',
		liveUrl: 'https://example.com',
	},
	{
		id: 4,
		name: 'Mobile Chat Application',
		description:
			'Cross-platform messaging app built with React Native. Features include end-to-end encryption, message search, and voice/video call integration.',
		techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
		githubUrl: 'https://github.com',
		liveUrl: 'https://example.com',
	},
];
