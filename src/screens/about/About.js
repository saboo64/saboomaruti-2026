import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import LazyLoad from 'react-lazyload';
import banner from '../../assets/banners/Saboo-RKS-Maruti-Suzuki-Now_6-Airbags.webp';
import '../../App.css';
import SeoMeta from '../../components/SEo/SeoMeta';
import { SEOPages } from '../../constants/SEOData';

export const LazyImage = ({ src, alt, className = '', height = 300 }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad height={height} offset={100} once>
      <div className='relative overflow-hidden'>
        {!loaded && (
          <div className='absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse' />
        )}
        <img
          src={src}
          alt={alt}
          loading='lazy'
          decoding='async'
          onLoad={() => setLoaded(true)}
          className={`${className} transition-opacity duration-500 ease-in ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </LazyLoad>
  );
};

const longText =
  "At Popular RKS Group, we have a robust presence in Hyderabad with extensive coverage that includes seven sales outlets, nine workshops, four True Value (pre-owned) sales outlets, one commercial outlet, and two premium car outlets, Nexa. As Hyderabad's leading automobile dealership, we have been at the forefront of driving growth in automobile sales and service over the last four decades. Our unwavering commitment to customer satisfaction is reflected in our extensive network and our belief in the 'Customers for Life' concept. We consistently strive to offer world-class products and services that provide the best value for money to our customers. Popular RKS Group's values of dependability, assurance, trustworthiness, and loyalty have gained the trust of our customers since our inception, and we continue to prioritize understanding and anticipating their needs to ensure our continued success.";

function About() {
  return (
    <>
      <SeoMeta {...SEOPages.About} />

      <Header />

      <LazyImage
        src={banner}
        alt='Popular RKS Banner'
        className='w-full max-w-full lg:mt-16'
        height={400}
      />

      <LazyImage
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
        alt='About Saboo Maruti'
        className='container w-full mx-auto mb-8'
        height={400}
      />

      <div className='container p-2 px-5 mx-auto leading-loose text-center border rounded-md shadow-md'>
        <p className='text-gray-100'>
          <span className='font-medium text-blue-900' id='aboutsaboo'>
            For over four decades, Popular RKS has been the driving force behind
            the growth of automobile sales and service in Hyderabad, solidifying
            our position as the city's premier automobile dealership.
          </span>
        </p>
        <p className='py-3 text-gray-100'>
          <span className='font-medium text-blue-900'>{longText}</span>
        </p>
      </div>

      <div className='container px-5 py-6 mx-auto text-center' id='about'>
        <h2 className='p-2 text-5xl font-medium text-red-500'>
          OUR MANAGEMENT
        </h2>
        <p className='text-blue-900'>
          At Saboo RKS, we pride ourselves on the quality of our team - our
          experts are not only the finest in the industry but also leaders in
          their field.
        </p>
      </div>

      {/** Management Members Grid */}
      <div className='container grid gap-8 p-2 px-5 mx-auto md:grid-cols-4 sm:grid-cols-2'>
        {[
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Madhu-madam.webp',
            name: 'MRS. MADHU SABOO',
            role: 'JOINT MANAGING DIRECTOR',
          },
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Vinay-sir.webp',
            name: 'MR. VINAY SABOO',
            role: 'CHAIRMAN & MANAGING DIRECTOR',
          },
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Tanay-sir.webp',
            name: 'MR. TANAY SABOO',
            role: 'DIRECTOR OF SALES & MARKETING',
          },
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Purva-Saboo.webp',
            name: 'MRS. PURVA SABOO',
            role: 'VICE PRESIDENT FINANCE',
          },
        ].map((person, index) => (
          <div key={index} className='text-center border rounded-md shadow-md'>
            <LazyImage
              src={person.src}
              alt={person.name}
              className='max-w-full p-1 mx-auto rounded-lg'
            />
            <h1 className='py-2 text-xl'>
              {person.name}
              <br />
              <span className='text-sm text-slate-400'>{person.role}</span>
            </h1>
          </div>
        ))}
      </div>

      {/** Additional Profiles */}
      <div className='items-center justify-center px-5 mx-auto mt-5 space-y-5 sm:flex sm:space-y-0 sm:space-x-8'>
        {[
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Patel-sir.webp',
            name: 'MR. N.K. PATEL',
            role: 'DIRECTOR OF OPERATIONS',
          },
          {
            src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Pramod.webp',
            name: 'MR. M. PRAMOD',
            role: 'ADVISOR',
          },
        ].map((person, index) => (
          <div
            key={index}
            className='text-center shadow-md border sm:max-w-[300px] w-full rounded-md'
          >
            <LazyImage
              src={person.src}
              alt={person.name}
              className='max-w-full p-1 mx-auto rounded-lg'
            />
            <h1 className='py-2 text-xl'>
              {person.name}
              <br />
              <span className='text-sm text-slate-400'>{person.role}</span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
