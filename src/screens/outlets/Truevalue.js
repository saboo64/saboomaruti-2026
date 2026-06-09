import React from 'react';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { truevalue } from '../../constants';
import SeoMeta from '../../components/SEo/SeoMeta';

function Truevalue() {
  return (
    <>
      <SeoMeta
        title='Maruti Suzuki True Value in Hyderabad | Buy & Sell Used Cars in Hyderabad'
        description='Maruti Suzuki True Value in Hyderabad. Buy & Sell used cars in Hyderabad. Saboo Maruti offers best deals on used cars. Sell your used car at Saboo Maruti True Value & get best price.'
        keywords='maruti suzuki truevalue showrrom in hyderabad, maruti truevalue showroom, maruti true value showroom near me, true value, preowned cars near me'
        canonicalUrl='https://www.saboomaruti.in/true-value'
        ogImage='/img/og-tags/saboomaruti-maps.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      {/* <Banner /> */}
      {/* <div className="my-8">
        <p className="text-3xl font-semibold text-center">True Value</p>
        <div className="container pt-16 mx-auto">
          <div className="grid grid-cols-1 gap-5 px-5 lg:grid-cols-3 md:grid-cols-2 md:px-0">
            {truevalue.map((item, index) => (
              <div className="mt-10 mb-10 bg-gray-200 rounded shadow-lg lg:mt-0">
                <div className="px-3 mb-5 -mt-8 space-y-6" key={index}>
                  <div className="p-4 text-sm text-white rounded shadow-md bg-gradient-to-r from-blue-800 to-cyan-500">
                    <p className="font-light">{item.address}</p>
                  </div>
                  <iframe
                    title="map"
                    className="w-full shadow-lg"
                    src={item.map}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className='my-28'>
        <p className='text-3xl font-semibold text-center'>True Value</p>
        <div className='container pt-16 mx-auto'>
          <div className='grid grid-cols-1 gap-5 px-3 lg:grid-cols-4 md:grid-cols-2 md:px-0'>
            {truevalue.map((item, index) => (
              <div className='w-full h-60 pt-1 px-4 text-left py-3 hover:text-white shadow-xl shadow-[#B0B0B0] group duration-500 border-t rounded-3xl relative overflow-hidden'>
                <div className='bg-blue-800  h-16 w-20 duration-500 group-hover:h-[130%] group-hover:w-[170%] group-hover:-top-11 group-hover:-right-20 rounded-full absolute -top-20 -right-20 -z-10'></div>
                <div className='mt-2 mb-2 text-base font-medium uppercase'>
                  {item.address}
                </div>
                {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
                <a href={item.map} target='_blank' rel='noreferrer'>
                  <div
                    className='flex justify-center h-32 my-5 duration-500 bg-center lg:h-40 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0'
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className='bg-[#40a7e4]'>
      <div className='container grid grid-cols-1 px-5 mx-auto text-white md:grid-cols-2 md:px-0 lg:mt-16'>
        <div className='py-6 my-auto text-2xl text-center sm:text-left sm:text-5xl'>
          Wherever you are <br />{' '}
          <span className='font-bold uppercase'>
            Popular <span className='text-red-600'>rks</span>
          </span>{' '}
          <br /> is by your side.
        </div>
        <div>
          <img
            src={require('../../assets/banners/outlets-banner.webp')}
            alt='Saboo-Maruti-Suzuki-Outlet'
          />
        </div>
      </div>
    </div>
  );
};

export default Truevalue;
