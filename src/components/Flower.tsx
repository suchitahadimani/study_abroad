import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingFlower = ({ image }: { image: string }) => {
  const [key, setKey] = useState(0);
  const [left, setLeft] = useState(`${Math.random() * 100}%`);

  useEffect(() => {
    const duration = 12 * 1000;
    const delay = Math.random() * 5 * 1000;

    const timeout = setTimeout(() => {
      setKey((prev) => prev + 1);
      setLeft(`${Math.random() * 100}%`);
    }, duration + delay);

    return () => clearTimeout(timeout);
  }, [key]);

  return (
    <motion.img
      key={key}
      src={image}
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={{
        y: [0, 300],
        scale: [0.5, 1.2],
        opacity: [1, 0.8, 0.6, 0],
      }}
      transition={{
        duration: 12,
        delay: Math.random() * 5,
        ease: 'easeInOut',
        repeat: 0, // Don't loop – we manually reset
      }}
      style={{
        position: 'absolute',
        top: '1%',
        left: left,
        width: '200px',
        opacity: 0.7,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default FloatingFlower;
