import { motion } from 'framer-motion';
// import { Globe, Smartphone, Palette } from 'lucide-react';
import { type Service } from '../data/mock';
import { useTilt } from '../hooks/useTilt';

// const iconMap: Record<string, React.ElementType> = {
//   Globe,
//   Smartphone,
//   Palette,
// };

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // const Icon = iconMap[service.icon] || Globe;
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        y: -10,
        boxShadow: '0 24px 64px rgba(34,211,238,0.18), 0 0 0 1px rgba(34,211,238,0.22)',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-card rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Image */}
      {
      // <div className="relative h-48 overflow-hidden">
      //   <motion.img
      //     src={service.image}
      //     alt={service.imageAlt}
      //     className="w-full h-full object-cover"
      //     whileHover={{ scale: 1.09 }}
      //     transition={{ duration: 0.6, ease: 'easeOut' }}
      //     loading="lazy"
      //   />
      //   <div
      //     className="absolute inset-0"
      //     style={{
      //       background:
      //         'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.05) 100%)',
      //     }}
      //   />
      //   {/* Icon badge */}
      //   <motion.div
      //     className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
      //     style={{ backgroundColor: 'var(--color-primary)' }}
      //     whileHover={{ scale: 1.15, rotate: 8 }}
      //     transition={{ duration: 0.3 }}
      //   >
      //     <Icon size={20} color="#080E1E" strokeWidth={2.5} />
      //   </motion.div>
      // </div>

      }

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
          <service.icon className="size-6" style={{color: 'var(--color-secondary)'}} />
        </div>
        <h3 className="font-heading font-bold text-xl text-charcoal uppercase tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-smoke leading-relaxed mt-2 mb-8">
          {service.description}
        </p>
        <div className="space-y-2 mb-6">
          {service.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1" style={{color: 'var(--color-secondary)'}}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Arrow CTA */}
        {
        // <motion.div
        //   className="mt-5 flex items-center gap-2 font-heading font-semibold text-sm"
        //   style={{ color: 'var(--color-secondary)' }}
        //   whileHover={{ x: 6 }}
        //   transition={{ duration: 0.25 }}
        // >
        //   Saber mais
        //   <span className="text-base">→</span>
        // </motion.div>
        }
      </div>
    </motion.div>
  );
}
