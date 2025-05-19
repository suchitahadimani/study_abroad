import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqData from '../utils/faq.json';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, #5B91A1,rgb(19, 19, 19), #000000)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none', // prevent blocking clicks or scroll
    overflow: 'hidden', // prevent scroll area expansion
  }}
>

      {/* Decorative Lines */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: 0,
        width: '150vw',
        height: '12px',
        backgroundColor: 'purple',
        transform: 'rotate(20deg)',
        transformOrigin: 'left center',
        zIndex: 1,
        borderRadius: '3px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '100%',
        left: '30%',
        width: '100vw',
        height: '12px',
        backgroundColor: 'limegreen',
        transform: 'rotate(-30deg)',
        transformOrigin: 'left center',
        zIndex: 1,
        borderRadius: '3px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        bottom: 25,
        left: 0,
        width: '150vw',
        height: '12px',
        backgroundColor: 'orange',
        zIndex: 1,
        borderRadius: '3px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        bottom: 0,
        right: '16vw',
        width: '12px',
        height: '130vh',
        backgroundColor: 'yellow',
        zIndex: 1,
        borderRadius: '3px',
        pointerEvents: 'none',
      }} />
</div>


      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          padding: '4rem 2rem 6rem 2rem',
          boxSizing: 'border-box',
        }}
      >

        <div
          style={{
            color: 'white',
            fontFamily: "'Marcellus SC', serif",
            fontSize: '20pt',
            maxWidth: '800px',
            width: '100%',
          }}
        >
          {/* London Underground Style Title */}
          <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto 4rem auto' }}>

            {/* Circle */}
            <div
              style={{
                width: '10em',
                height: '10em',
                borderRadius: '50%',
                border: '2em solid red',
                position: 'relative',
              }}
            >

              {/* Blue Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100vw',
                  height: '4em',
                  backgroundColor: '#001CA7',
                  zIndex: 2,
                }}
              />

              {/* FAQ Header */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '4em',
                  fontWeight: 'bold',
                  zIndex: 3,
                  letterSpacing: '1px',
                }}
              >
                FAQs
              </div>
            </div>
          </div>

          {/* FAQ Wrapper */}
          <div style={{ position: 'relative', marginLeft: '4rem' }}>
            
            {/* Long Vertical Red Line */}
            <div
              style={{
                position: 'absolute',
                top: '-25%',
                left: 0,
                bottom: 0,
                width: '12px',
                backgroundColor: '#FF4136',
                zIndex: 1,
                borderRadius: '6px',
              }}
            />

            {/* FAQ Entries */}
            <div>
              {faqData.map((faq, index) => (
                <div key={index} style={{ position: 'relative', marginBottom: '4rem' }}>
                  
                  {/* White Glowing Dot */}
                  <motion.div
                    initial={{ scale: 1, boxShadow: '0 0 0px white' }}
                    animate={openIndex === index 
                      ? { scale: 1.3, boxShadow: '0 0 10px 5px white' }
                      : { scale: 1, boxShadow: '0 0 4px 2px white' }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      position: 'absolute',
                      left: '-0.2rem',
                      top: '1.5rem',
                      zIndex: 2,
                    }}
                  />

                  {/* Question Button */}
                  <button
                    onClick={() => toggle(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      textAlign: 'left',
                      fontSize: '20pt',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      paddingLeft: '2rem',
                      position: 'relative',
                      outline: 'none',
                      zIndex: 3,
                    }}
                  >
                    Q: {faq.question}
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.4 }}
                        style={{
                          marginTop: '0.5rem',
                          paddingLeft: '2rem',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        <p style={{ fontSize: '16pt', fontWeight: 300 }}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
    </section>
  );
};

export default FAQs;
