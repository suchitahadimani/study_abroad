

function Header() {
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
          background: 'linear-gradient(to bottom, #1B3374, #1433CD)',
          zIndex: 0,
        }}
      />

<img
            src="/assets/test.svg"
            alt="babbage"
            style={{
              position: 'absolute',
              height: 'auto',
              width: '100vw'
            }}


          />





    </div>
  );
}

export default Header;


