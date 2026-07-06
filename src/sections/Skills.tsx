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
		<section id="skills" className="relative min-h-screen overflow-hidden bg-[#f4f8ff] py-20">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="mb-14 flex flex-col gap-5 border-b border-sky-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
								What I work with
							</p>
							<h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
								Skills
							</h2>
							<p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
								Technologies and tools I use to design, build, and ship full-stack products.
							</p>
						</div>
					</div>

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
								className="rounded-lg border border-sky-100 bg-white/90 p-6 shadow-[0_12px_28px_rgba(148,163,184,0.08)]"
							>
								<h3 className="mb-4 text-xl font-semibold text-slate-900">
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
											className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700"
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
