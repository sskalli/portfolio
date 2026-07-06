import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-zinc-700 bg-neutral-950/90 backdrop-blur-md">
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
								className="text-stone-300 transition-colors hover:text-blue-400"
							>
								{item.label}
							</motion.a>
						))}
					</div>

					<div className="flex items-center ml-auto">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="rounded-lg bg-zinc-800 p-2 text-stone-200 transition-colors hover:bg-zinc-700 md:hidden"
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
						className="border-t border-zinc-700 md:hidden"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="block rounded-md px-3 py-2 text-stone-300 transition-colors hover:bg-zinc-800 hover:text-blue-400"
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
