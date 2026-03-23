import { motion } from 'framer-motion';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const socialLinks = [
		{
			label: 'GitHub',
			url: 'https://github.com/sskalli',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
				</svg>
			),
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/sami-skalli-b81890249/',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.426-.103.25-.129.599-.129.949v5.43h-3.554s.047-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.594 2.897-1.594 2.117 0 3.704 1.383 3.704 4.356v5.591zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.954.768-1.71 1.959-1.71 1.188 0 1.915.757 1.932 1.71 0 .951-.744 1.71-1.976 1.71zm1.582 11.019H3.819V9.724h3.1v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
				</svg>
			),
		},
		{
			label: 'Email',
			url: 'mailto:skallisami@gmail.com',
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
		},
	];

	return (
		<footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
					{/* Copyright */}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="text-gray-600 dark:text-gray-400"
					>
						© {currentYear} Developer Portfolio. All rights reserved.
					</motion.p>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="flex space-x-6"
					>
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
								aria-label={link.label}
							>
								{link.icon}
							</a>
						))}
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
