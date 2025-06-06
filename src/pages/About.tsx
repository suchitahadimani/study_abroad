"use client"
import { useState, useEffect } from 'react';
import FloatingObject from '../components/FloatingObject';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMedium(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about">
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

      <FloatingObject
        image="/assets/left_flower.svg"
        width="300px"
        top="70%"
        left="calc(100px + 2vw)"
      />

      <FloatingObject
        image="/assets/right_flower.svg"
        width="150px"
        top="60%"
        right="calc(100px + 2vw)"
      />

      <FloatingObject
        image="/assets/cloud.svg"
        width="clamp(800px, 100vw, 100vw)"
        top="0%"
        
        opacity={0.8}
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
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.6',
          }}
        >
          <h1 style={{ fontSize: isMobile ? '36pt' : isMedium ? '48pt' : '65pt'}}>About</h1>
          <p style={{ fontSize: isMobile ? '24pt' : isMedium ? '28pt' : '32pt'}}>
            This theme bridges the historical contributions of Turing, Babbage, and Lovelace with
            modern CS challenges, integrating ethical considerations, software development, and
            intercultural engagement. You will be able to explore computational history while solving
            contemporary problems through creative software or hardware solutions.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
