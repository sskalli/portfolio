import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export default function Experience() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section id="experience" className="bg-neutral-900 py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="mb-12 text-4xl font-bold text-stone-100 md:text-5xl">Experience</h2>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="relative"
					>
						{/* Experience Items */}
						<div className="space-y-0">
							{experiences.map((exp, index) => (
								<motion.div
									key={exp.id}
									variants={itemVariants}
									className={`relative md:flex gap-12 m-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
								>
									{/* Content */}
									<div className="pl-8 md:pl-0 md:w-1/2">
										<div className="m-0 rounded-lg border border-zinc-700 bg-zinc-800 p-6">
											<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
												<h3 className="text-xl font-semibold text-stone-100">
													{exp.role}
												</h3>
												<span className="text-sm text-stone-400">
													{exp.years}
												</span>
											</div>

											<p className="mb-3 font-medium text-blue-300">
												{exp.company}
											</p>

											<p className="mb-4 text-stone-300">{exp.description}</p>

											<ul className="space-y-2">
												{exp.achievements.map((achievement, idx) => (
													<li
														key={idx}
														className="flex items-start text-stone-300"
													>
														<span className="mr-3 text-blue-300">✓</span>
														<span>{achievement}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
