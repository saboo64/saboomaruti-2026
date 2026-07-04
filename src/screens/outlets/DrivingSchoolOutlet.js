import React from 'react';
// import outletsBanner from '../../assets/banners/outlets-banner.webp';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { school } from '../../constants';
import SeoMeta from '../../components/SEo/SeoMeta';

function DrivingSchoolOutlet() {
  return (
    <>
      <SeoMeta
        title='Maruti Driving School Locations in Hyderabad | Fees & Offers on Maruti Driving School'
        description='Maruti Driving School Locations in Hyderabad. Vist our site to know your nearest Maruti Driving School Locationor  Call now 9848898488.'
        keywords='maruti driving school, maruti authorized driving school, maruti driving school near me'
        canonicalUrl='https://www.saboomaruti.in/maruti-driving-school-locations'
        ogImage='' // You can replace this with a valid image path like "/img/og-tags/driving_school.webp"
      />

      <Header />
      {/* <Banner /> */}
      {/* <div className="my-8">
        <p className="text-3xl font-semibold text-center">Driving School</p>
        <div className="container pt-16 mx-auto">
          <div className="grid grid-cols-1 gap-5 px-5 lg:grid-cols-3 md:grid-cols-2 md:px-0">
            {school.map((item, index) => (
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
      <div className='my-28 '>
        <p className='flex justify-center text-3xl font-semibold '>
          Driving School
        </p>
        <div className='container pt-16 mx-auto '>
          <div className='grid justify-center grid-cols-1 gap-5 px-3 lg:grid-cols-3 md:grid-cols-2 md:px-0'>
            {school.map((item) => (
              <div key={item.address} className='w-full  h-60 pt-1 px-4 text-left py-3 p hover:text-white shadow-xl shadow-[#B0B0B0] group duration-500 border-t rounded-3xl relative overflow-hidden'>
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

export default DrivingSchoolOutlet;
