import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
	const [isDark, setIsDark] = useState(true);

	const toggleDarkMode = () => {
		setIsDark(!isDark);
		if (!isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
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
