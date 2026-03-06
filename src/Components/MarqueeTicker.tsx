import { motion } from 'framer-motion';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export function MarqueeTicker({
  items,
  speed = 35,
  direction = 'left',
  className = '',
}: MarqueeTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-heading font-semibold text-xs uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-smoke)' }}
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
