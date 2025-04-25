import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How do I form a team for the hackathon?',
    answer:
      'Participate in the discussion board to start forming teams. Teams should consist of 3-4 undergrad students. Graduate students can float around and join groups in progress during the event.',
  },
  {
    question: "What happens if I don't have a team by the start of the hackathon?",
    answer:
      "Any undergrad student who doesn't have a team by the start of the hackathon will be randomly placed in a group.",
  },
  {
    question: 'What tools and resources will be available?',
    answer:
      "You'll have access to the CEC GitLab, IDEs, and any necessary documentation. Don't forget to bring your laptops!",
  },
  {
    question: 'Can I start working on my project before the hackathon?',
    answer:
      'Yes! If you form a group early, feel free to work ahead on your idea and application.',
  },
  {
    question: 'What role will graduate students play in the hackathon?',
    answer:
      'Graduate students will serve in multiple roles: as team facilitators and resource experts to help teams brainstorm and troubleshoot, as participants who can join teams, and as judges who will collaborate with Prof. Pettit to assess the results of the hackathon.',
  },
  {
    question: 'What are the judging criteria for the hackathon?',
    answer:
      'The judging will be based on the following criteria: \n\n1. Relevance to Theme (20%): How well the project integrates historical or ethical aspects. \n2. Innovation and Creativity (20%): Originality and inventiveness of the solution. \n3. Technical Complexity and Functionality (20%): Robustness and sophistication of the implementation. \n4. Usability and Presentation (20%): Ease of use and clarity in presenting the solution. \n5. Team Collaboration (20%): How effectively the team worked together.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ position: 'relative', minHeight: '150vh', width: '100vw', overflowX: 'hidden' }}>
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #5B91A1, #000000)',
          zIndex: 0,
        }}
      />

      {/* Foreground */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '4rem 2rem',
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
            <div
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '30px solid red',
                position: 'relative',
              }}
            >
             <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%', // center from left
                transform: 'translate(-50%, -50%)', // center horizontally and vertically
                width: '100vw', // span full screen width
                height: '40px',
                backgroundColor: '#001CA7',
                zIndex: 2,
              }}
            />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '36pt',
                  fontWeight: 'bold',
                  zIndex: 3,
                  letterSpacing: '1px',
                }}
              >
                FAQs
              </div>
            </div>
          </div>

          {/* FAQ Entries */}
          <div>
            {faqData.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '3rem' }}>
  {/* Vertical metro line */}
  <motion.div
    initial={{ height: '40px' }}
    animate={{
      height: openIndex === index ? '160px' : '40px',
      backgroundColor: '#FF4136', // Change per question if desired
    }}
    transition={{ duration: 0.4 }}
    style={{
      width: '6px',
      borderRadius: '6px',
      position: 'absolute',
      top: 0,
      left: '1rem',
      zIndex: 0,
    }}
  />

  {/* Metro "stop" dot */}
  <motion.div
    initial={{ scale: 1, boxShadow: '0 0 0px white' }}
    animate={
      openIndex === index
        ? { scale: 1.2, boxShadow: '0 0 10px 4px white' }
        : { scale: 1, boxShadow: '0 0 0px white' }
    }
    transition={{ duration: 0.3 }}
    style={{
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      left: '0.7rem',
      zIndex: 2,
    }}
  />

  {/* Question */}
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
      zIndex: 3,
    }}
  >
    Q: {faq.question}
  </button>

  {/* Animated Answer */}
  <AnimatePresence>
    {openIndex === index && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          overflow: 'hidden',
          marginTop: '0.5rem',
          paddingLeft: '0.5rem',
          whiteSpace: 'pre-wrap',
        }}
      >
        <p style={{ fontSize: '16pt', fontWeight: 300 }}>{faq.answer}</p>
      </motion.div>
    )}
  </AnimatePresence>
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 

    </div>
  );
};

export default FAQs;
