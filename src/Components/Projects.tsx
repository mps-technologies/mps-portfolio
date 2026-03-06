import { motion } from 'framer-motion';
import { projects } from '../data/mock';
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from './AnimatedSection';

export function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-card overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-label">O nosso trabalho</p>
          <h2 className="section-title section-title-dark">Nossos Projetos</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
          <p className="font-body text-smoke mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Projetos que desenvolvemos para demonstrar as nossas capacidades
            técnicas e criativas.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
