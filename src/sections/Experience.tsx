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
		<section id="experience" className="py-20 bg-white dark:bg-dark-900">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>

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
										<div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-6 m-0">
											<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
												<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
													{exp.role}
												</h3>
												<span className="text-sm text-gray-500 dark:text-gray-400">
													{exp.years}
												</span>
											</div>

											<p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
												{exp.company}
											</p>

											<p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

											<ul className="space-y-2">
												{exp.achievements.map((achievement, idx) => (
													<li
														key={idx}
														className="text-gray-600 dark:text-gray-400 flex items-start"
													>
														<span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
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
