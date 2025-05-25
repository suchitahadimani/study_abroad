import { motion } from 'framer-motion';

interface TrackPopupProps {
  selectedTrack: {
    label: string;
    image: string;
    description: string;
    ideas: string[];
  } | null;
  onClose: () => void;
}

const TrackPopup = ({ selectedTrack, onClose }: TrackPopupProps) => {
  if (!selectedTrack) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          backgroundColor: '#FCE27B', // bright yellow
          padding: '2rem',
          borderRadius: '20px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          position: 'relative',
          overflowY: 'auto',
          margin: 'auto',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#000'
          }}
        >
          X
        </button>

        <img
          src="/assets/fancy_invite.svg"
          alt="Fancy Invite"
          style={{
            width: '25vw',
            margin: '0 auto',
            display: 'block',
          }}
        />

        <p style={{ fontFamily: "'Marcellus SC', serif", fontSize: '22px', marginBottom: '1rem', color: '#000' }}>
          {selectedTrack.description}
        </p>

        <h3 style={{ fontFamily: "'Marcellus SC', serif", fontSize: '30px', marginBottom: '1rem' , color: '#000'}}>
          Project Ideas:
        </h3>

        <ul style={{ fontFamily: "'Marcellus SC', serif", fontSize: '22px', paddingLeft: '2rem' , color: '#000'}}>
          {selectedTrack.ideas.map((idea, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{idea}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TrackPopup;
