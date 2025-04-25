import { motion } from 'framer-motion';
const ScheduleSection = () => {
  return (
    <div style={{ position: 'relative', minHeight: '150vh', width: '100vw', overflowX: 'hidden' }}>
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #CDEEF8, #5B91A1)',
          zIndex: 0,
        }}
      />

<motion.div
  initial={{ opacity: 0.7 }}
  animate={{ opacity: [0.8, 0.6, 0.3, 0.7, 0.8] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  style={{
    position: 'absolute',
    top: 0,
    left: 50,
    width: '400px',
    height: '150vh',
    background: 'linear-gradient(to bottom right, rgb(255, 255, 170), transparent)',
    transform: 'rotate(-20deg)',
    filter: 'blur(35px)',
    mixBlendMode: 'screen',
    pointerEvents: 'none',
    zIndex: 1,
  }}
/>

<motion.div
  initial={{ opacity: 0.7 }}
  animate={{ opacity: [0.8, 0.6, 0.3, 0.7, 0.8] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  style={{
    position: 'absolute',
    top: 0,
    right: 50,
    width: '400px',
    height: '150vh',
    background: 'linear-gradient(to bottom left, rgb(255, 255, 170), transparent)',
    transform: 'rotate(20deg)',
    filter: 'blur(35px)',
    mixBlendMode: 'screen',
    pointerEvents: 'none',
    zIndex: 1,
  }}
/>





      {/* Foreground text and images */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '180vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            color: 'black',
            fontFamily: "'Marcellus SC', serif",
            fontSize: '32pt',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.6',
            position: 'relative',
          }}
        >
          <h1>Schedule</h1>
          <div className="text-[32px] leading-relaxed space-y-6">
            <p><strong>9:00 AM - 10:00 AM</strong> – Meet in hotel lobby and travel to classroom site</p>
            <p><strong>10:00 AM - 10:15 AM</strong> – Welcome, setup, and theme introduction</p>
            <p><strong>10:15 AM - 12:30 PM</strong> – Hacking begins</p>
            <p><strong>12:30 PM - 1:15 PM</strong> – Lunch break</p>
            <p><strong>1:15 PM - 3:00 PM</strong> – Hacking Continues</p>
            <p><strong>3:00 PM - 4:00 PM</strong> – Presentations</p>
            <p><strong>4:00 PM - 4:30 PM</strong> – Judging</p>
          </div>

          {/* Left decoration (desktop only) */}
          <img
            src="/assets/turing.png"
            alt="babbage"
            style={{
              position: 'absolute',
              bottom: -20,
              left: -250,
              height: '40vh'

            }}
            className="hidden md:block"
          />

            {/* Left decoration (desktop only) */}
            <img
            src="/assets/lovelace.png"
            alt="babbage"
            style={{
              position: 'absolute',
              bottom: -45,
              right: -350,
              height: '45vh'
            }}
            className="hidden md:block"
          />

          

          <img
            src="/assets/babbage.png"
            alt="babbage"
            style={{
              position: 'absolute',
              bottom: 0,
              right: -200,
              height: '40vh'
            }}
            className="hidden md:block"

          />

          
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
