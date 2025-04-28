import { motion } from 'framer-motion';

interface TrackCardProps {
  label: string;
  image: string;
  onClick: () => void;
}

const ShineImage = ({ src, alt }: { src: string; alt: string }) => {
  const delay = Math.random() * 10 + 3;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        maxWidth: '500px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '12px',
        }}
      />
      <motion.div
        initial={{ left: '-10%', opacity: 0 }}
        animate={{ left: '100%', opacity: [0, 1, 0] }}
        transition={{
          delay,
          repeat: Infinity,
          duration: 1.5,
          repeatDelay: delay,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          bottom: '10%',
          left: 0,
          width: '5%',
          background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)',
          pointerEvents: 'none',
          transform: 'skewX(-20deg)',
        }}
      />
    </motion.div>
  );
};

const TrackCard = ({ label, image, onClick }: TrackCardProps) => {
  return (
    <div
      style={{
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <h2
        style={{
          fontFamily: "'Moon Dance', cursive",
          color: '#EBC52A',
          fontSize: '64px',
          marginBottom: '1rem',
        }}
      >
        {label}
      </h2>
      <ShineImage src={image} alt={label} />
    </div>
  );
};

export default TrackCard;
