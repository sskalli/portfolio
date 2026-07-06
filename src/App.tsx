import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<main className="overflow-hidden">
				<Hero />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
