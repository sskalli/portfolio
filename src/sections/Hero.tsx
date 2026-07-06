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
		<section id="about" className="flex min-h-screen items-center justify-center bg-neutral-900 pt-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center"
				>
					{/* Name */}
					<motion.h1 variants={itemVariants} className="mb-6 text-5xl font-bold text-stone-100 md:text-7xl">
						Sami Skalli
					</motion.h1>

					{/* Title */}
					<motion.p
						variants={itemVariants}
						className="mb-6 text-2xl text-stone-300 md:text-3xl"
					>
						Senior JavaScript / TypeScript Developer
					</motion.p>

					{/* Summary */}
					<motion.p
						variants={itemVariants}
						className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-stone-300"
					>
						Full-stack developer with 5 years of experience across the JavaScript and TypeScript ecosystem.
						I enjoy designing and building solutions end-to-end — from architecture to shipping — with a
						focus on clean, maintainable code that holds up as products evolve.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a
							href="#projects"
							className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-stone-100 transition-colors hover:bg-blue-500"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-600 px-8 py-3 font-semibold text-stone-100 transition-colors hover:border-blue-400 hover:bg-zinc-900 hover:text-blue-300"
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
							className="h-6 w-6 text-slate-500"
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
