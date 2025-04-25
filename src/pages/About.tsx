
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ position: 'relative', minHeight: '150vh', width: '100vw', overflowX: 'hidden' }}>
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', // match container height
          background: 'linear-gradient(to bottom, #1433CD, #7AA2D9, #A3C8E8, #CDEEF8)',
          zIndex: 0,
        }}
      />

      {/* Bouncing cloud layer positioned higher */}
      <motion.img
        src="/assets/cloud.svg"
        alt="clouds"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '1%', // <–– this moves it higher on the screen
          left: 0,
          width: '100%',
          height: '100vh', // clouds take less vertical space
          objectFit: 'cover',
          opacity: 0.3,
          zIndex: 1,
        }}
      />
{/* Bottom-left image */}

<motion.img
  src="/assets/left_flower.svg"
  alt="bottom left decoration"
  initial={{ y: 0, x: 0 }}
  animate={{
    y: [-2, 2, -2],
    x: [-1, 1, -1],
  }}
  transition={{
    repeat: Infinity,
    repeatType: 'mirror',
    duration: 4,
    ease: 'easeInOut',
  }}
  style={{
    position: 'absolute',
    bottom: 'calc(100px + 2vh)',
    left: 'calc(100px + 2vw)',
    width: '300px',
    height: 'auto',
    zIndex: 2,
  }}
/>


{/* Bottom-right image */}

<motion.img
  src="/assets/right_flower.svg"
  alt="bottom right decoration"
  initial={{ y: 0, rotate: 0 }}
  animate={{
    y: [-2, 2, -2],
    x: [-1, 1, -1],
  }}
  transition={{
    repeat: Infinity,
    repeatType: 'mirror',
    duration: 4,
    ease: 'easeInOut',
  }}
  style={{
    position: 'absolute',
    bottom: 'calc(100px + 2vh)',
    right: 'calc(100px + 2vw)',
    width: '150px',
    height: 'auto',
    zIndex: 2,
  }}
/>



      {/* Foreground text */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '150vh', // ensure the content area matches background height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            color: 'black',
            fontFamily: "'Marcellus SC', serif",
            fontSize: '32pt', // or '2.133rem'
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.6',
          }}
        >
          <h1>About</h1>
          <p>
            This theme bridges the historical contributions of Turing, Babbage, and Lovelace with
            modern CS challenges, integrating ethical considerations, software development, and
            intercultural engagement. You will be able to explore computational history while solving
            contemporary problems through creative software or hardware solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
