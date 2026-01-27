import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { products } from '../../constants';
import { cngProducts } from '../../constants';
import { tourProducts } from '../../constants';
import { LazyImage } from '../about/About';

const HomePageTab = () => {
  const [currentTab, setCurrentTab] = useState('Tab1');
  useEffect(() => {
    setCurrentTab('Tab1');
  }, []);

  return (
    <>
      <div className='container mx-auto mt-4 '>
        <Tab.Group>
          <Tab.List className='flex p-0.5 mx-auto mb-4 space-x-1 border rounded-full lg:max-w-xl'>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : ''
                } flex-1 text-center py-2 rounded-full cursor-pointer  outline-none`
              }
              onClick={() => setCurrentTab('Tab1')}
            >
              PETROL
            </Tab>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : ''
                } flex-1 text-center py-2 rounded-full cursor-pointer outline-none`
              }
              onClick={() => setCurrentTab('Tab2')}
            >
              CNG
            </Tab>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : ''
                } flex-1 text-center py-2 rounded-full cursor-pointer outline-none`
              }
              onClick={() => setCurrentTab('Tab3')}
            >
              TOUR
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-2'>
            <Tab.Panel className='p-4 bg-white rounded-xl'>
              {currentTab === 'Tab1' && (
                <Fragment>
                  <ArenaCars />
                </Fragment>
              )}
            </Tab.Panel>
            <Tab.Panel className='p-4 bg-white rounded-xl'>
              {currentTab === 'Tab2' && (
                <Fragment>
                  <CNGCars2 />
                </Fragment>
              )}
            </Tab.Panel>
            <Tab.Panel className='p-4 bg-white rounded-xl'>
              {currentTab === 'Tab3' && (
                <Fragment>
                  <TourCars />
                </Fragment>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

const ArenaCars = () => {
  return (
    <>
      <div className='container grid gap-2 pb-5 mx-auto sm:grid-1 lg:grid-cols-3'>
        {products.map((item, index) => (
          <div
            className='flex flex-col transition duration-500 transform bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:scale-95'
            key={index}
          >
            <div className='flex-auto overflow-hidden '>
              <Link to={item.explore}>
                <div className='relative'>
                  <LazyImage
                    src={item.img}
                    alt={item.name}
                    className={`mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center rounded-t-md ${
                      item.id === 5 && 'scale-125'
                    }`}
                  />
                  <p className='absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-red-500 shadow-xl top-3 -right-7 w-28'>
                    offer
                  </p>
                  {/* <div className='flex items-center mx-3 mb-1 space-x-3'>
    <img
      src={require('../../assets/icons/gas-station.png')}
      className='w-8 h-8'
      alt=''
    />
    <p className='text-sm'>
      Mileage <br />
      <span className='font-semibold'>22.05 kmpl*</span>
    </p>
  </div> */}
                  <p className='absolute text-sm font-normal text-blue-900 bottom-3 right-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block w-4 h-4 mr-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14.452 7.34a1 1 0 01-.636-.636l-4-7a1 1 0 011.732-1l4 7a1 1 0 01-.636 1.636z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M9 8a1 1 0 011-1h1a1 1 0 010 2H10a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M14.5 10a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.946-1.895a1 1 0 01-.604-.303l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 01-.81 1.717z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M15 15a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {item.mileage}*
                  </p>
                  <div className='absolute inset-0 opacity-10 rounded-t-md'></div>
                </div>
              </Link>
            </div>
            <div className='flex-auto bg-white rounded-b-md'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className='w-auto h-5 '
                  />

                  <div>
                    <p className='flex items-center text-xl font-bold'>
                      <span className='text-xs'>
                        {' '}
                        <BiRupee />
                      </span>
                      {item.price}
                      <span className='font-extralight'>
                        <sup>*</sup>
                      </span>
                    </p>{' '}
                    <p className='mx-1 text-xs font-extralight'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 p-2.5 mb-2'>
                  <Link
                    to='/maruti-suzuki-car-offers-page'
                    className='bg-blue-800 hover:bg-rose-700 hover:border duration-100 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full flex items-center justify-center'
                  >
                    VIEW OFFER
                  </Link>

                  <Link
                    to={item.explore}
                    rel='noreferrer'
                    className='  text-blue-900  hover:text-blue-900 hover:bg-gray-200 p-2 max-w-[44%] w-full flex justify-center items-center text-sm uppercase rounded-full'
                  >
                    explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="duration-500 sm:col-span-1 hover:scale-95">
          <a href="/maruti-suzuki-driving-school">
            {" "}
         
            <div className="relative lg:mx-auto lg:h-[400px] lg:w-full rounded-md shadow-2xl overflow-hidden z-auto">
              <img
                src={require("../../assets/banners/RewardSlider/Website_Titles_Maruti_Suzuki_Insurance_Service__Saboo_RKS_Motor_Insurance_Renewal (1).webp")}
                className="object-cover w-full h-full "
                alt="banner"
              />
            </div>
          </a>
        </div> */}
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <a href='/maruti-suzuki-car-insurance-renewal'>
          <div className=''>
            <LazyImage
              src={require('../../assets/banners/RewardSlider/Website_Titles_Maruti_Suzuki_Insurance_Service__Saboo_RKS_Motor_Insurance_Renewal (1).webp')}
              className='object-cover w-full h-full duration-500 hover:scale-95 rounded-xl'
              alt='banner'
            />
          </div>
        </a>
        <a href='/maruti-car-service-centers-near-me'>
          <div className=''>
            <LazyImage
              src={require('../../assets/banners/Website_Tile_Maruti_Suzuki_Service_diwali_offer_with_Saboo_RKS_Motor_October_Service.webp')}
              className='object-cover w-full h-full duration-500 rounded-xl hover:scale-95'
              alt='banner'
            />
          </div>
        </a>
      </div>
    </>
  );
};
const CNGCars2 = () => {
  return (
    <>
      <div className='container grid gap-2 pb-5 mx-auto sm:grid-1 lg:grid-cols-3'>
        {cngProducts.map((item, index) => (
          <div
            className='flex flex-col transition duration-500 transform bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:scale-95'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <div className='relative'>
                  {' '}
                  <LazyImage
                    src={item.img}
                    alt={item.name}
                    className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center rounded-t-md'
                  />
                  <p className='absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-green-600 shadow-xl top-3 -right-7 w-28'>
                    CNG
                  </p>
                  <p className='absolute text-sm font-normal text-blue-900 bottom-3 right-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block w-4 h-4 mr-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14.452 7.34a1 1 0 01-.636-.636l-4-7a1 1 0 011.732-1l4 7a1 1 0 01-.636 1.636z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M9 8a1 1 0 011-1h1a1 1 0 010 2H10a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M14.5 10a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.946-1.895a1 1 0 01-.604-.303l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 01-.81 1.717z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M15 15a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {item.mileage} km/L
                  </p>
                  <div className='absolute inset-0 opacity-10 rounded-t-md'></div>
                </div>
              </Link>
            </div>
            <div className='flex-auto bg-white rounded-b-md'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='w-auto h-5' />
                  <div>
                    <p className='flex items-center text-xl font-bold'>
                      <span className='text-xs'>
                        {' '}
                        <BiRupee />
                      </span>
                      &nbsp;{item.price}
                      <span className='font-extralight'>
                        <sup>*</sup>
                      </span>
                    </p>{' '}
                    <p className='mx-1 text-xs font-extralight'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 p-2.5 mb-2'>
                  <Link
                    to={item.explore}
                    className='hover:bg-green-700 bg-blue-800 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800 text-blue-800 hover:bg-red-700 hover:border-red-700 hover:text-white  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded-full'
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const TourCars = () => {
  return (
    <>
      <div className='container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        {tourProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden hover:scale-95 hover:shadow-lg duration-500'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <LazyImage
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-10' />
                  <div>
                    <p className='font-bold'>
                      {item.petrol}
                      <span className='font-light'>*</span>
                    </p>
                    <p className='font-light'>Petrol</p>
                  </div>
                </div>
                <div className='flex items-center justify-center pb-5 space-x-3'>
                  <Link
                    to={item.explore}
                    className='bg-blue-800 hover:bg-red-700 hover:border hover:text-white duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800  hover:bg-red-700 hover:border-red-700 hover:text-white  duration-300 ease-in p-2 max-w-[44%] w-full text-center text-blue-800 text-sm uppercase rounded-full'
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageTab;
