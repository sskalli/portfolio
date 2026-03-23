import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8"
					>
						{projects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								className="group bg-white dark:bg-dark-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								{/* Placeholder Project Image */}
								<div className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center overflow-hidden">
									<svg className="w-20 h-20 text-white/20" fill="currentColor" viewBox="0 0 24 24">
										<path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-1h2v19h-2zm4 4h2v15h-2z" />
									</svg>
								</div>

								{/* Project Content */}
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
										{project.name}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
										{project.description}
									</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.techStack.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 rounded"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Links */}
									<div className="flex gap-4">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
										>
											GitHub
											<svg
												className="w-4 h-4 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
												/>
											</svg>
										</a>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
										>
											Live Demo
											<svg
												className="w-4 h-4 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
