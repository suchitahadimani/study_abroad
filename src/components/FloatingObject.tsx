import { motion } from 'framer-motion';

interface FloatingObjectProps {
  image: string;
  width: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  zIndex?: number;
  motionType?: 'bounce' | 'drift' | 'fall' | 'sway'; 
  minWidth?: string;  
  minHeight?: string; 
}

const getAnimation = (motionType: FloatingObjectProps['motionType']) => {
  switch (motionType) {
    case 'bounce':
      return {
        initial: { y: 0 },
        animate: { y: [-10, 10, -10] },
        transition: { repeat: Infinity, repeatType: 'mirror' as const, duration: 4, ease: 'easeInOut' },
      };
    case 'drift':
      return {
        initial: { x: 0 },
        animate: { x: [0, 30, -20, 0] },
        transition: { repeat: Infinity, duration: 12, ease: 'easeInOut', delay: Math.random() * 5 },
      };
    case 'fall':
      return {
        initial: { y: -100, opacity: 0 },
        animate: {
          y: [ -100, 0, 100, 200, 300 ],
          opacity: [ 0, 1, 0.8, 0.4, 0 ],
        },
        transition: { duration: 12 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 5 },
      };
    case 'sway':
      return {
        initial: { rotate: 0 },
        animate: { rotate: [0, 15, -10, 5, 0] },
        transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
      };
    default:
      return {
        initial: { y: 0 },
        animate: { y: [-10, 10, -10] },
        transition: { repeat: Infinity, repeatType: 'mirror' as const, duration: 4, ease: 'easeInOut' },
      };
  }
};

const FloatingObject = ({
  image,
  width,
  height = 'auto',
  top = '0',
  left,
  right,
  bottom,
  opacity = 1,
  zIndex = 1,
  minWidth,
  minHeight,
  motionType = 'bounce', // default is 'bounce'
}: FloatingObjectProps) => {
  const animation = getAnimation(motionType);

  return (
    <motion.img
      src={image}
      alt="floating decoration"
      {...animation}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width,
        height,
        opacity,
        pointerEvents: 'none',
        zIndex,
        minWidth,
        minHeight,
      }}
    />
  );
};

export default FloatingObject;
