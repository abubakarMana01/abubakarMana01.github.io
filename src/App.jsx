import Nav from "./components/Nav";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import SideLinks from "./components/SideLinks";
import Footer from "./components/Footer";

function App() {
  return (
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
