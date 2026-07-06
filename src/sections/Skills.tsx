import { motion } from 'framer-motion';

interface SkillCategory {
	title: string;
	skills: string[];
}

export default function Skills() {
	const skillCategories: SkillCategory[] = [
		{
			title: 'Frontend',
			skills: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Redux', 'TanStack Query'],
		},
		{
			title: 'Backend',
			skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Redis', 'Prisma', 'Zod'],
		},
		{
			title: 'Tools & Platforms',
			skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Electron'],
		},
		{
			title: 'Other Skills',
			skills: ['Testing', 'Agile', 'Problem Solving', 'Feature Ownership'],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section id="skills" className="bg-neutral-950 py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="mb-12 text-4xl font-bold text-stone-100 md:text-5xl">Skills</h2>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8"
					>
						{skillCategories.map((category, categoryIndex) => (
							<motion.div
								key={category.title}
								variants={itemVariants}
								className="rounded-lg border border-zinc-700 bg-zinc-800 p-6"
							>
								<h3 className="mb-4 text-xl font-semibold text-stone-100">
									{category.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, skillIndex) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.3,
												delay: categoryIndex * 0.05 + skillIndex * 0.05,
											}}
											viewport={{ once: true }}
											className="rounded-full border border-blue-500/40 bg-blue-950 px-3 py-1 text-sm font-medium text-blue-200"
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
