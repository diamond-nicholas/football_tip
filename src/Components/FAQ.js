import React from 'react';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div>
      onClick={() => toggleFAQ(index)}
      key={index}
      className={`${faq.open ? 'open' : ''}`}
      <div>{faq.question}</div>
      <div>{faq.answer}</div>
    </div>
  );
};

export default FAQ;
