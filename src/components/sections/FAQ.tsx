'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'How long does SEO take to work?',
    answer:
      'SEO is a long-term investment. While quick wins are possible within 3–6 months, sustainable growth typically happens over 6–12 months.',
  },
  {
    question: 'Will I need a new website?',
    answer:
      'Not necessarily. We assess your current website and recommend changes only if they will improve performance.',
  },
  {
    question: 'Can you work with businesses in any industry?',
    answer:
      'Yes, our strategies are tailored to each industry and audience, ensuring effectiveness across sectors.',
  },
  {
    question: 'Will I be locked into a contract?',
    answer:
      'No long-term contracts are required. We believe in results-driven relationships.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative font-oswald bg-black px-4 md:px-20 pb-10 md:pb-20">
      <div className="text-center text-4xl md:text-6xl mb-10">
        <h2 className="text-white">
          FAQ Section: <span className="text-primary">Your</span>
        </h2>
        <h2 className="text-primary">Questions Answered</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`relative rounded-xl my-4 overflow-hidden transition-all duration-300 border ${isOpen
                ? 'text-black min-h-32'
                : 'bg-[#0d0d0d] text-white border-gray-700'
                }`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {/* Background image overlay when open */}
              {isOpen && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/faq-cover-1.svg"
                    alt="faq background"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="relative z-10 cursor-pointer p-5 flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                <span className="text-2xl">{isOpen ? '−' : '+'}</span>
              </div>

              {/* Animated Answer Section */}
              <div
                className={`
                      relative z-10 px-5 ${isOpen ? 'pb-5' : 'pb-0'} pt-0 text-base md:max-w-2xl md:text-md 
                      transition-all duration-500 ease-in-out overflow-hidden 
                      transform ${isOpen ? 'opacity-100 max-h-40 scale-100' : 'opacity-0 max-h-0 scale-95'}
                    `}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
