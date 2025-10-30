import { DarkModeProvider } from './contexts/DarkModeContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  // Adjust scroll speed: 0.3 = slower, 1.0 = normal, higher = faster
  useSmoothScroll(0.3);

  return (
    <DarkModeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
