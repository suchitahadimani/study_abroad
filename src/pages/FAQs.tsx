import { useState } from 'react';
import faqsData from '../utils/faq.json'; 

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);  // Toggle active state
  };

  return (
    <section id="faqs">
      <h2>FAQs</h2>
      <div className="faq-container">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq">
            <h3
              onClick={() => handleQuestionClick(index)}
              className="faq-question"
            >
              {faq.question}
            </h3>
            {activeQuestion === index && (
              <p className="faq-answer">{faq.answer}</p>  // Show the answer if this question is active
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
