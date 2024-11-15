import './App.css';
import Nav from './Component/Nav.jsx';
import Hero from './Component/Hero.jsx';
import About from './Component/About.jsx';
import Technologies from './Component/Technologies.jsx';
import Experience from './Component/Experience.jsx';
import Project from './Component/Project.jsx';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Reset />
      <div className="absolute top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-8 sm:px-4">
        <Nav />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
      </div>
    </div>
  );
}

export default App;
