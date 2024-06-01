import React, { useState } from 'react';

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

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-black border-2 mb-10 rounded-lg overflow-hidden">
      <button
        className="w-full text-left focus:outline-none flex justify-between items-center p-4"
        style={{ height: '60px' }} // Fixed height for the question section
        onClick={onClick}
      >
        <div className='flex flex-row px-2'>
          <div className='text-xl'>{question}</div> 
        </div>
        <div className='flex flex-row justify-end px-6'>
          <div className='ml-2 text-xl'>{isOpen ? '-' : '+'}</div>
        </div>
      </button>
      {isOpen && <div className="p-4 bg-gray-50 border-t border-gray-600 text-xl">{answer}</div>}
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
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
