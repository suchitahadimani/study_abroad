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

  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMedium(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div style={{ position: 'relative', maxHeight:'150vh', width: '100vw', overflowX: 'hidden',overflowY: 'hidden', }}>
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
                textAlign: 'right',
              }}
            >
              {isMobileMenuOpen ? '▲' : '☰'}
            </div>

            {isMobileMenuOpen && (
              <div
                style={{
                  marginTop: '1rem',
                  backgroundColor: '#C0D6F5',
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
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4rem 6vw',
          
          boxSizing: 'border-box',
          flexWrap: 'wrap',
        }}
      >
        {/* Left side image */}

      {/* Image (desktop only) */}
        {!isMobile && (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <img
              src="/assets/big_ben.svg"
              alt="UK Background"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "contain",
                maskImage: "linear-gradient(to bottom, black 50%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 80%)",
                opacity: 1,
              }}
            />
          </div>
        )}

        {/* Mobile background image */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/assets/big_ben.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 1,
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />
      )}



        {/* Countdown text */}
        <div style={{ flex: 1, color: 'white', fontFamily: "'Marcellus SC', serif", textAlign: 'right', zIndex: 3, minWidth: '300px', transform: isMobile ? 'translateY(0%)' : 'translateY(-20%)'}}>
          <div style={{ fontSize: isMobile ? '36pt' : isMedium ? '48pt' : '65pt',}}>CS ORIGINS HACKATHON 2026</div>
          <div style={{ fontSize: isMobile ? '24pt' : isMedium ? '28pt' : '32pt', marginTop: '1rem', marginBottom: '4rem' }}>January 12, 2026</div>

          <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: isMobile ? 'center' : 'flex-end',
            gap: isMobile ? '2rem' : '4rem',
            marginTop: '4rem',
            fontSize: isMobile ? '28pt' : isMedium ? '36pt' : '48pt',
            textShadow: '0 0 8px white, 0 0 15px #5dafff',
            
          }}
        >

            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div>{formatNumber(Object.values(timeLeft)[i])}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
