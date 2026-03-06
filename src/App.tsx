import { About } from './components/About';
import { ClientWork } from './components/ClientWork';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { Services } from './components/Services';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)' }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <ClientWork />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
