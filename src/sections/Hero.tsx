import { motion } from 'framer-motion';

export default function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	return (
		<section className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900 pt-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center"
				>
					{/* Name */}
					<motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
						<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
							Sami Skalli
						</span>
					</motion.h1>

					{/* Title */}
					<motion.p
						variants={itemVariants}
						className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
					>
						Senior JavaScript / TypeScript Developer
					</motion.p>

					{/* Summary */}
					<motion.p
						variants={itemVariants}
						className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
					>
						I craft beautiful, scalable web experiences with React, TypeScript, and Node.js. With 5
						years of professional experience, I help teams build high-performance applications that
						users love.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a
							href="#projects"
							className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-dark-800 font-semibold transition-colors"
						>
							Contact Me
						</a>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="flex justify-center mt-16"
					>
						<svg
							className="w-6 h-6 text-gray-400 dark:text-gray-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
