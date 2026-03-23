import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
	isDark: boolean;
	onToggleDarkMode: () => void;
}

export default function Navbar({ isDark, onToggleDarkMode }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false)

	const navItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Skills', href: '#skills' },
		// { label: 'Projects', href: '#projects' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-dark-700">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative flex items-center h-16">

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
						{navItems.map((item, index) => (
							<motion.a
								key={item.label}
								href={item.href}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
							>
								{item.label}
							</motion.a>
						))}
					</div>

					{/* Dark Mode Toggle */}
					<div className="flex items-center space-x-4 ml-auto">
						<button
							onClick={onToggleDarkMode}
							className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
							aria-label="Toggle dark mode"
						>
							{isDark ? (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v2.25M12 18.75V21M5.636 5.636l1.591 1.591M16.773 16.773l1.591 1.591M3 12h2.25M18.75 12H21M5.636 18.364l1.591-1.591M16.773 7.227l1.591-1.591M15.75 12A3.75 3.75 0 1112 8.25 3.75 3.75 0 0115.75 12z"
									/>
								</svg>
							) : (
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.267-2.597.75-3.752A9.753 9.753 0 1021.752 15z"
									/>
								</svg>
							)}
						</button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-800"
							aria-label="Toggle menu"
						>
							{isOpen ? (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden border-t border-gray-200 dark:border-dark-700"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	);
}
