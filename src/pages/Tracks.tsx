
import { motion } from 'framer-motion';

const tracks = [
  { label: 'Historical Innovations', image: '/assets/track1.svg' },
  { label: 'Cryptography', image: '/assets/track2.svg' },
  { label: 'Accessibility and Ethics', image: '/assets/track3.svg' },
  { label: 'British Themed', image: '/assets/track4.svg' },
];


const cloudBounce = {
  initial: { y: 0 },
  animate: { x: [0, 20, 0], y: [0, -10, 0] },
  transition: {
    repeat: Infinity,
    duration: 5,
    ease: 'easeInOut',
  },
};

const CloudLayer = () => {
  return (
    <>

<motion.img
  src="/assets/flower1.svg"
  initial={{ x: 0, y: 0, rotate: 0 }}
  animate={{ 
    x: [0, 30, -20, 0],
    y: [0, 200],
    rotate: [0, 15, -10, 0],
    opacity: [1, 0.8, 0.4, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    delay: Math.random() * 5,
    ease: 'easeInOut',
  }}
  style={{
    position: 'absolute',
    top: '30%',
    left: `${Math.random() * 100}%`,
    width: '100px',
    opacity: 0.7,
    pointerEvents: 'none',
    zIndex: 0,
  }}
/>

<motion.img
  src="/assets/flower2.svg"
  initial={{ x: 0, y: 0, rotate: 0 }}
  animate={{
    y: [0, 300],
    scale: [0.5, 1.2],
    opacity: [1, 0.8, 0.6, 0],
  }}
  
  transition={{
    duration: 12,
    repeat: Infinity,
    delay: Math.random() * 5,
    ease: 'easeInOut',
  }}
  style={{
    position: 'absolute',
    top: '1%',
    left: `${Math.random() * 100}%`,
    width: '200px',
    opacity: 0.7,
    pointerEvents: 'none',
    zIndex: 0,
  }}
/>


<motion.img
  src="/assets/flower3.svg"
  alt="petal"
  initial={{
    y: -100,            // start above screen
    x: 0,
    rotate: 0,
    opacity: 0,
  }}
  animate={{
    y: [ -100, 0, 100, 200, 300 ],          // natural fall
    x: [ 0, 20, -30, 15 ],                 // sway
    rotate: [0, 15, -10, 5, 0],            // flutter
    opacity: [0, 1, 0.8, 0.4, 0],          // fade out as it falls
  }}
  transition={{
    duration: 12 + Math.random() * 3,       // slight variety
    repeat: Infinity,
    ease: 'easeInOut',
    delay: Math.random() * 5,
  }}
  style={{
    position: 'absolute',
    top: '60%',
    left: `${Math.random() * 100}%`,
    width: '100px',
    pointerEvents: 'none',
    zIndex: 0,
  }}
/>






    <motion.img
        src="/assets/butterfly.svg"
        alt="Butterfly"
        {...cloudBounce}
        style={{
          position: 'absolute',
          top: '57%',
          right: '7%',
          width: '100px',
          opacity: 0.8,
          zIndex: 2,
        }}
      />


      <motion.img
        src="/assets/hummingbird.svg"
        alt="Hummingbird"
        {...cloudBounce}
        style={{
          position: 'absolute',
          top: '15%',
          left: '15%',
          width: '100px',
          opacity: 0.8,
          zIndex: 2,
        }}
      />

      {/* Top Right Cloud */}
      <motion.img
        src="/assets/cloud1.svg"
        alt="Top Right Cloud"
        {...cloudBounce}
        style={{
          position: 'absolute',
          top: '2%',
          right: '3%',
          width: '800px',
          opacity: 0.8,
          zIndex: 2,
        }}
      />

      {/* Middle Left Cloud */}
      <motion.img
        src="/assets/cloud2.svg"
        alt="Middle Left Cloud"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '-10%',
          width: '800px',
          opacity: 0.7,
          zIndex: 2,
        }}
      />

      {/* Bottom Right Cloud */}
      <motion.img
        src="/assets/cloud3.svg"
        alt="Bottom Right Cloud"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '30%',
          width: '700px',
          opacity: 0.3,
          zIndex: 2,
        }}
      />
    </>
  );
};


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
      {/* Base image */}
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

      {/* Shine overlay */}
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




const Tracks = () => {
  const handleClick = (label: string) => {
    console.log(`Clicked: ${label}`);
    // eventually show a new component here
  };

  return (
<div
  style={{
    position: 'relative', // 🔧 KEY FIX
    backgroundColor: '#CDEEF8',
    fontFamily: "'Marcellus SC', serif",
    fontSize: '32pt',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
      <CloudLayer />
      <div
        style={{
          display: 'grid',
          gap: '4rem',
          maxWidth: '1200px',
          width: '100%',
          gridTemplateColumns: '1fr', // fallback for small screens
        }}
      >
    

        <style>
          {`
            @media (min-width: 768px) {
              .track-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          `}
        </style>

        <h1
          style={{
            fontFamily:"'Marcellus SC', serif",
            color: '#EBC52A',
            fontSize: '64px',
            textAlign: 'center',
            marginBottom: '2rem',
            zIndex: 2,
          }}
        >
          Tracks
        </h1>

        <div className="track-grid" style={{ display: 'grid', gap: '4rem' }}>
          {tracks.map((track, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleClick(track.label)}
            >
             <h2
              style={{
                fontFamily: "'Moon Dance', cursive",
                color: '#EBC52A',
                fontSize: '64',
                marginBottom: '1rem',
              }}
            >
              {track.label}
            </h2>
            <ShineImage src={track.image} alt={track.label} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
