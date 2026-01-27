import React from 'react';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { workshop } from '../../constants';
import SeoMeta from '../../components/SEo/SeoMeta';

function WorkShop() {
  return (
    <>
      <SeoMeta
        title='Maruti Suzuki Authorized Service Center in Hyderabad | Saboo Maruti'
        description='Saboo Maruti Authorized Maruti Suzuki Service Center in Hyderabad. Visit our nearest Saboo Maruti workshop for Maruti car Servicing, Repairing, Painting, Battery repair. Free pickup & Drop facility available. Call now 9848898488'
        keywords='maruti service cente near me, maruti car service locations, maruti service center address, car service center'
        canonicalUrl='https://www.saboomaruti.in/'
        ogImage='/img/og-tags/saboo_rks.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      <Banner />
      {/* <div className="my-8">
        <p className="text-3xl font-semibold text-center">Workshop</p>
        <div className="container pt-16 mx-auto">
          <div className="grid grid-cols-1 gap-5 px-5 lg:grid-cols-3 md:grid-cols-2 md:px-0">
            {workshop.map((item, index) => (
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
      <div className='my-8' id='workshop'>
        <p className='text-3xl font-semibold text-center'>WorkShop</p>
        <div className='container pt-16 mx-auto'>
          <div className='grid grid-cols-1 gap-5 px-3 lg:grid-cols-3 md:grid-cols-2 md:px-0'>
            {workshop.map((item, index) => (
              <div className='w-full  h-80 pt-1 px-4 text-left py-3 hover:text-white shadow-xl shadow-[#B0B0B0] group duration-500 border-t rounded-3xl relative overflow-hidden'>
                <div className='bg-blue-800  h-16 w-20 duration-500 group-hover:h-[130%] group-hover:w-[170%] group-hover:-top-11 group-hover:-right-20 rounded-full absolute -top-20 -right-20 -z-10'></div>
                <div className='mt-2 mb-2 ml-3 text-2xl font-semibold'>
                  {item.address}
                </div>
                {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
                <a href={item.map} target='_blank' rel='noreferrer'>
                  <div
                    className='flex justify-center h-32 my-5 duration-500 bg-center lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0'
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
            saboo <span className='text-red-600'>rks</span>
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

export default WorkShop;
