import schedule from '../utils/schedule.json';

const ScheduleSection = () => {
  return (
    <section id="schedule">
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
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


      {/* Foreground text and images */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '110vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem 1rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            backgroundColor: '#F9F8E7',
            padding: '0rem 5rem 3rem 5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(69, 38, 38, 5)',
            color: 'black',
            fontSize: '24px',
            fontFamily: "'Marcellus SC', serif",
            textAlign: 'center',
            maxWidth: '1000px',
            lineHeight: '1.6',
            position: 'relative',
          }}
        >
          <h1>Schedule</h1>
          <div style={{ width: '100%' }}>

            {schedule.map((item, index) => (
              <div
                key={index}
                style={{ marginBottom: '1.5rem' }} 
              >
                <div style={{ fontWeight: 1000}}>{item.time}</div>
                <div>{item.event}</div>
              </div>
            ))}
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
    </section>
  );
};

export default ScheduleSection;
