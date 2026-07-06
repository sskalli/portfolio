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
		<section id="experience" className="relative overflow-hidden bg-[#eef5ff] py-20">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="mb-14 flex flex-col gap-5 border-b border-sky-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
								Career path
							</p>
							<h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
								Experience
							</h2>
							<p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
								Roles where I have shipped features, owned systems, and grown as an engineer.
							</p>
						</div>
					</div>

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
										<div className="m-0 rounded-lg border border-sky-100 bg-white p-6 shadow-[0_12px_28px_rgba(148,163,184,0.08)]">
											<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
												<h3 className="text-xl font-semibold text-slate-900">
													{exp.role}
												</h3>
												<span className="text-sm text-slate-500">
													{exp.years}
												</span>
											</div>

											<p className="mb-3 font-medium text-sky-700">
												{exp.company}
											</p>

											<p className="mb-4 text-slate-600">{exp.description}</p>

											<ul className="space-y-2">
												{exp.achievements.map((achievement, idx) => (
													<li
														key={idx}
														className="flex items-start text-slate-600"
													>
														<span className="mr-3 text-sky-700">✓</span>
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
