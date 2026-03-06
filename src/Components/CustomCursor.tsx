import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 30 });
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-hover]'));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--color-primary)',
        }}
        animate={{
          width: clicking ? 5 : 8,
          height: clicking ? 5 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: hovering ? 'rgba(34,211,238,0.7)' : 'rgba(34,211,238,0.4)',
        }}
        animate={{
          width: hovering ? 52 : clicking ? 22 : 34,
          height: hovering ? 52 : clicking ? 22 : 34,
          backgroundColor: hovering ? 'rgba(34,211,238,0.08)' : 'transparent',
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
