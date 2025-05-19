"use client";

import { useState, useEffect } from "react";

function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Update mobile flag on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date("January 12, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div style={{ position: 'relative', minHeight: '90vh', width: '100vw', overflowX: 'hidden' }}>
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #E4F8FE, #1433CD)',
          zIndex: 0,
        }}
      />

      {/* Navbar */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          right: '4vw',
          zIndex: 3,
          fontFamily: "'Marcellus SC', serif",
        }}
      >
        {/* Hamburger icon (mobile only) */}
        {isMobile ? (
          <>
            <div
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                fontSize: '32pt',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              ☰
            </div>

            {isMobileMenuOpen && (
              <div
                style={{
                  marginTop: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  padding: '1rem 2rem',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {['About', 'Tracks', 'Schedule', 'FAQ'].map((label) => {
                  const targetId = `#${label.toLowerCase()}`;
                  return (
                    <a
                      key={label}
                      href={targetId}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '20pt',
                      }}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '32pt',
              color: 'white',
            }}
          >
            {['About', 'Tracks', 'Schedule', 'FAQ'].map((label) => {
              const targetId = `#${label.toLowerCase()}`;
              return (
                <a
                  key={label}
                  href={targetId}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#A3C8E8';
                    e.currentTarget.style.textShadow = '0 0 10px #A3C8E8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '90vh',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4rem 6vw',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
        }}
      >
        {/* Left side image */}

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: isMobile ? 'absolute' : 'relative',
          top: isMobile ? 0 : undefined,
          left: isMobile ? 0 : '-25vw',
          width: isMobile ? '100%' : 'auto',
          height: isMobile ? '100%' : 'auto',
          opacity: isMobile ? 0.15 : 1,
          zIndex: isMobile ? 1 : 2,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/big_ben.svg"
          alt="UK Background"
          style={{
            width: isMobile ? '80%' : '90%',
            maxWidth: isMobile ? '400px' : '300px',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>


        {/* Countdown text */}
        <div style={{ flex: 1, color: 'white', fontFamily: "'Marcellus SC', serif", textAlign: 'right', zIndex: 3, minWidth: '300px'}}>
          <div style={{ fontSize: '64pt' }}>CS ORIGINS HACKATHON 2025</div>
          <div style={{ fontSize: '32pt', marginTop: '1rem', marginBottom: '4rem' }}>January 12, 2025</div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '4rem',
              marginTop: '4rem',
              fontSize: '48pt',
              textShadow: '0 0 8px white, 0 0 15px #5dafff',
              flexWrap: 'wrap',
            }}
          >
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div>{formatNumber(Object.values(timeLeft)[i])}</div>
                <div style={{ fontSize: '48pt' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
