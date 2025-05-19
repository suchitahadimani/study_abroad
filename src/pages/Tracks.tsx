
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import tracks from '../utils/tracks.json';
import FloatingObject from '../components/FloatingObject';
import TrackCard from '../components/TrackCard';
import TrackPopup from '../components/TrackPopup';

const CloudLayer = () => {
  return (
    <>
      <FloatingObject
        image="/assets/flower1.svg"
        width="300px"
        top="10%"
        left="10%"
        opacity={0.5}
        motionType="fall"
      />

      <FloatingObject
        image="/assets/flower2.svg"
        width="200px"
        top="60%"
        left="50%"
        opacity={0.7}
        motionType="fall"
      />

      <FloatingObject
        image="/assets/flower3.svg"
        width="100px"
        top="75"
        left="90%"
        opacity={0.7}
        motionType="fall"
      />

      <FloatingObject
        image="/assets/butterfly.svg"
        width="100px"
        top="57%"
        right="7%"
        opacity={0.8}
        zIndex={2}
        motionType="bounce" 
      />

      <FloatingObject
        image="/assets/hummingbird.svg"
        width="100px"
        top="5%"
        left="28%"
        zIndex={2}
        motionType="bounce" 
      />

      <FloatingObject
        image="/assets/cloud1.svg"
        width="800px"
        top="2%"
        right="3%"
        zIndex={2}
        motionType="drift" 
      />

      <FloatingObject
        image="/assets/cloud2.svg"
        width="800px"
        top="40%"
        left="-10%"
        opacity={0.9}
        zIndex={2}
        motionType="drift" 
      />

      <FloatingObject
        image="/assets/cloud3.svg"
        width="700px"
        top="90%"
        right="30%"
        opacity={0.3}
        zIndex={2}
        motionType="drift" 
      />
    </>
  );
};




const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState<null | typeof tracks[0]>(null);

  const handleClick = (label: string) => {
    const track = tracks.find((t) => t.label === label);
    if (track) setSelectedTrack(track);
  };

  const closePopup = () => setSelectedTrack(null);

  return (
    <section id="tracks">
    <div style={styles.container}>
      <CloudLayer />

      <div style={styles.inner}>
        <h1 style={styles.title}>Tracks</h1>

        {/* Track Grid */}
        <div className="track-grid" style={styles.grid}>
          {tracks.map((track, index) => (
            <TrackCard
              key={index}
              label={track.label}
              image={track.image}
              onClick={() => handleClick(track.label)}
            />
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedTrack && (
          <TrackPopup selectedTrack={selectedTrack} onClose={closePopup} />
        )}
      </AnimatePresence>

      {/* Grid Styles */}
      <style>
        {`
          .track-grid {
            display: grid;
            gap: 4rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .track-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>
    </div>
    </section>
  );
};

export default Tracks;

const styles = {
  container: {
    position: 'relative',
    backgroundColor: '#CDEEF8',
    fontFamily: "'Marcellus SC', serif",
    fontSize: '32pt',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties,

  inner: {
    display: 'grid',
    gap: '4rem',
    maxWidth: '1200px',
    width: '100%',
  } as React.CSSProperties,

  title: {
    fontFamily: "'Marcellus SC', serif",
    color: '#EBC52A',
    fontSize: '96pt',
    textAlign: 'center',
    marginBottom: '2rem',
    zIndex: 2,
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gap: '4rem',
  } as React.CSSProperties,
};

