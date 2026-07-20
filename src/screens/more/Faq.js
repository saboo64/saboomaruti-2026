import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Header from '../../components/header/Header';
import { faqData } from '../../constants/faqData';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function Faq() {
  return (
    <>
      <Header />

      <SeoMeta
        title="Maruti Suzuki FAQ's | Popular RKS  Maruti"
        description='Check out the frequently asked questions for Maruti Suzuki Arena cars. Get on road price, Book a test drive, Offers on Maruti cars, Maruti car servicing, Maruti insurance, Maruti finance. Call us 98488 98488.'
        keywords='Maruti FAQ'
        canonicalUrl='https://www.saboomaruti.in/faq'
        ogImage='/img/og-tags/FAQ.webp'
        twitterUrl='https://www.saboomaruti.in/faq'
      />
      <StructuredData data={faqSchema} />

      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/local/privacy_banner.webp'
        alt='1'
      />

      <p className='mb-4 text-xl font-semibold text-center text-red-500 lg:text-3xl md:text-2xl'>
        Frequently Asked Questions
      </p>
      <p className='max-w-3xl px-5 mx-auto mb-5 text-center md:px-0'>
        Have any questions? Take a look & maybe we can answer them right now. If
        not, write to us at smg.crc.cm@popularv.com
      </p>

      <div className='w-full max-w-6xl p-2 mx-auto bg-white rounded-2xl'>
        {faqData?.map((data) => (
          <Disclosure key={data.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-3 mt-2 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                  <span>{data.question}</span>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                  {data.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
}

export default Faq;
