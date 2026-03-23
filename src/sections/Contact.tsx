import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Simple validation
		if (formData.name && formData.email && formData.message) {
			setIsSubmitted(true);
			setFormData({ name: '', email: '', message: '' });
			// Reset message after 3 seconds
			setTimeout(() => setIsSubmitted(false), 3000);
		}
	};

	const contactMethods = [
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			label: 'Email',
			value: 'skallisami@gmail.com',
			href: 'mailto:skallisami@gmail.com',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
				</svg>
			),
			label: 'GitHub',
			value: 'GitHub Profile',
			href: 'https://github.com/sskalli',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.426-.103.25-.129.599-.129.949v5.43h-3.554s.047-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.594 2.897-1.594 2.117 0 3.704 1.383 3.704 4.356v5.591zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.954.768-1.71 1.959-1.71 1.188 0 1.915.757 1.932 1.71 0 .951-.744 1.71-1.976 1.71zm1.582 11.019H3.819V9.724h3.1v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
				</svg>
			),
			label: 'LinkedIn',
			value: 'LinkedIn Profile',
			href: 'https://www.linkedin.com/in/sskalli/',
		},
	];

	return (
		<section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
					<p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
						Have a question or want to work together? Feel free to reach out!
					</p>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Methods */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-8"
						>
							<div>
								<h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
									Contact Methods
								</h3>
								<div className="space-y-4">
									{contactMethods.map((method) => (
										<a
											key={method.label}
											href={method.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-start space-x-4 p-4 bg-white dark:bg-dark-900 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow"
										>
											<div className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
												{method.icon}
											</div>
											<div>
												<p className="font-semibold text-gray-900 dark:text-white">
													{method.label}
												</p>
												<p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
											</div>
										</a>
									))}
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
										placeholder="Your name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
										placeholder="your@email.com"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
										placeholder="Your message..."
									></textarea>
								</div>

								{isSubmitted && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg"
									>
										✓ Thank you! Your message has been sent.
									</motion.div>
								)}

								<button
									type="submit"
									className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
								>
									Send Message
								</button>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
