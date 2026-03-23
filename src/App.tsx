import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window === 'undefined') {
			return true;
		}

		const savedTheme = window.localStorage.getItem('theme');

		if (savedTheme) {
			return savedTheme === 'dark';
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
		window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	const toggleDarkMode = () => {
		setIsDark((prevIsDark) => !prevIsDark);
	};

	return (
		<div className={isDark ? 'dark' : ''}>
			<Navbar isDark={isDark} onToggleDarkMode={toggleDarkMode} />
			<main className="overflow-hidden">
				<Hero />
				<Skills />
				{/* <Projects /> */}
				<Experience />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
