import { About } from './Components/About';
import { ClientWork } from './Components/ClientWork';
import { Footer } from './Components/Footer';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';
import { ScrollProgress } from './Components/ScrollProgress';
import { Services } from './Components/Services';

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
