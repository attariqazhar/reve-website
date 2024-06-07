import React, { useState } from 'react';
import PropTypes from 'prop-types';

const faqData = [
  {
    question: 'What Is ReVe?',
    answer: 'ReVe is Indonesia’s first diverse and circular fashion-rental app.',
  },
  {
    question: 'How To Rent In ReVe?',
    answer: 'To rent in ReVe, simply register an account, browse our catalogue, and select the items you want to rent.',
  },
  {
    question: 'How To Return Your Clothes?',
    answer: 'You can return your clothes by packaging them and sending them back using our provided return label.',
  },
  {
    question: 'How To Pick Your Clothes?',
    answer: 'You can pick your clothes by browsing through our curated selections and choosing items that fit your style and needs.',
  },
  {
    question: 'How To Complain To Us?',
    answer: 'You can reach out to our customer service through the Contact Us page for any complaints or issues.',
  },
];

const styles = {
  accordionItem: {
    border: '2px solid black',
    marginBottom: '30px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    textAlign: 'left',
    outline: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    height: '60px',
    cursor: 'pointer',
  },
  answer: {
    padding: '16px',
    // borderTop: '1px solid black',
    fontSize: '1.5rem',
  },
  questionText: {
    fontSize: '1.5rem',
  },
  toggleIcon: {
    fontSize: '1.5rem',
  },
};

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div style={styles.accordionItem}>
      <button
        style={{
          ...styles.button,
          borderBottom: isOpen ? '1px' : 'none',
        }}
        onClick={onClick}
      >
        <div style={styles.questionText}>{question}</div>
        <div style={styles.toggleIcon}>{isOpen ? '-' : '+'}</div>
      </button>
      {isOpen && <div style={styles.answer}>{answer}</div>}
    </div>
  );
}

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default FAQAccordion;
