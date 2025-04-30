"use client";

import { useState, useEffect } from "react";

function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
          display: 'flex',
          gap: '2rem',
          fontFamily: "'Marcellus SC', serif",
          fontSize: '32pt',
          color: 'white',
        }}
      >
        {['About', 'Tracks', 'Schedule', 'FAQ'].map((label) => {
          const href = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
          return (
            <a
              key={label}
              href={href}
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


      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '90vh',
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column-reverse' : 'row', // responsive layout
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4rem 6vw',
          boxSizing: 'border-box',
        }}
      >

        {/* Left side SVG image */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            position: window.innerWidth < 768 ? 'absolute' : 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: window.innerWidth < 768 ? 0.15 : 1,
            zIndex: window.innerWidth < 768 ? 1 : 2,
            pointerEvents: 'none', // ensures it's just decorative
          }}
        >
          <img
            src="/assets/big_ben.svg"
            alt="UK Background"
            style={{
              width: '80%',
              maxWidth: '400px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>


        {/* Right side text + countdown */}
        <div style={{ flex: 1, color: 'white', fontFamily: "'Marcellus SC', serif", textAlign: 'right', zIndex: 3}}>
          <div style={{ fontSize: '64pt'}}>
            CS ORIGINS HACKATHON 2025
          </div>
          <div style={{ fontSize: '32pt', marginTop: '1rem', marginBottom: '4rem', zIndex: 3}}>
            January 12, 2025
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '4rem',
              marginTop: '4rem',
              fontSize: '48pt',
              textShadow: '0 0 8px white, 0 0 15px #5dafff',
              zIndex: 3
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div>{formatNumber(timeLeft.days)}</div>
              <div style={{ fontSize: '48pt' }}>Days</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>{formatNumber(timeLeft.hours)}</div>
              <div style={{ fontSize: '48pt' }}>Hours</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>{formatNumber(timeLeft.minutes)}</div>
              <div style={{ fontSize: '48pt' }}>Minutes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>{formatNumber(timeLeft.seconds)}</div>
              <div style={{ fontSize: '48pt' }}>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
