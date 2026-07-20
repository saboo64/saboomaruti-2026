import React from 'react';
import PropTypes from 'prop-types';
import StructuredData from './StructuredData';

/**
 * Visible Q&A block + matching FAQPage schema for a single car page.
 * Answers avoid quoting specific prices/mileage numbers here, since those
 * already live in each car's variant/mileage tables above and would drift
 * out of sync with a hardcoded figure duplicated into FAQ text.
 */
const CarFaq = ({ carName, cngUrl }) => {
  const questions = [
    {
      question: `What is the on-road price of ${carName} in Hyderabad?`,
      answer: `The on-road price of ${carName} in Hyderabad varies by variant, transmission and fuel type — see the variant-wise price table above for exact figures. Popular RKS also offers exchange bonuses and EMI options on every variant.`,
    },
    cngUrl
      ? {
          question: `Is ${carName} available in CNG in Hyderabad?`,
          answer: `Yes, ${carName} is available with a factory-fitted CNG option in Hyderabad. Check the on-road price and mileage for the CNG variant on our ${carName} CNG page.`,
        }
      : {
          question: `Is ${carName} available in CNG in Hyderabad?`,
          answer: `${carName} is currently available in petrol variants at Popular RKS in Hyderabad. Contact your nearest showroom for the latest fuel options.`,
        },
    {
      question: `Where can I test drive or buy ${carName} in Hyderabad?`,
      answer: `You can book a test drive or buy ${carName} at any Popular RKS Maruti Suzuki showroom across Hyderabad and Secunderabad, including Somajiguda, Malakpet, Kompally, Kushaiguda and Shamirpet.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className='container px-5 mx-auto my-8'>
      <StructuredData data={faqSchema} />
      <h2 className='mb-4 text-xl font-semibold text-center md:text-2xl'>
        {carName} - Frequently Asked Questions
      </h2>
      <div className='max-w-3xl mx-auto space-y-4'>
        {questions.map((item) => (
          <div key={item.question}>
            <h3 className='font-semibold text-gray-900'>{item.question}</h3>
            <p className='text-gray-600'>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

CarFaq.propTypes = {
  carName: PropTypes.string.isRequired,
  cngUrl: PropTypes.string,
};

export default CarFaq;
