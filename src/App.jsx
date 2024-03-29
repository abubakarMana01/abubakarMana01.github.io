import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import SideLinks from "./components/SideLinks";
import Footer from "./components/Footer";
import IconLoader from "./components/loader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return loading ? (
		<div className="loadingWrapper">
			<IconLoader />
		</div>
	) : (
		<div className="App">
			<Nav />

			<SideLinks left />
			{/* Content */}
			<main>
				<Hero />
				<About />
				<Experiences />
				<Projects />
				<Contact />
				<Footer />
			</main>
			<SideLinks />
		</div>
	);
}

export default App;
