import { motion } from 'framer-motion';

interface SkillCategory {
	title: string;
	skills: string[];
}

export default function Skills() {
	const skillCategories: SkillCategory[] = [
		{
			title: 'Frontend',
			skills: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Bootstrap', 'Redux'],
		},
		{
			title: 'Backend',
			skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Redis'],
		},
		{
			title: 'Tools & Platforms',
			skills: ['Git', 'Docker', 'CI/CD', 'AWS'],
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
		<section id="skills" className="py-20 bg-white dark:bg-dark-900">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>

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
								className="bg-gray-100 dark:bg-dark-800 rounded-lg p-6"
							>
								<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
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
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
