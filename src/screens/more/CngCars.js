import React from 'react';
import cngBanner from '../../assets/banners/Saboo-RKS-Maruti-Suzuki-Now_6-Airbags.jpeg';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { cngProducts } from '../../constants';
import { BiRupee } from 'react-icons/bi';
// import { Helmet } from 'react-helmet';
import SeoMeta from '../../components/SEo/SeoMeta';

function CngCars() {
  return (
    <>
      <SeoMeta
        title='Maruti Suzuki CNG Cars in Hyderabad | Buy Maruti CNG Cars in Hyderabad 2026'
        description='Saboo Maruti CNG Cars in Hyderabad. Buy Brezza CNG, Swift CNG, Alto CNG Cars in Hyderabad. Choose the location to find the nearest authorized Maruti Service Center. Free pickup and drop Facility. To Book service Appointment today Call us on 9848898488'
        keywords='vitara brezza service in hyderabad, buy maruti cng cars in hyderabad, vitara brezza workshops, maruti suzuki vitara brezza service centers, maruti suzuki dzire workshops, maruti suzuki alto workshops in hyderabad, Maruti Suzuki Service Center, Maruti Car Service, Maruti Service Center Near Me, Maruti Service Centers in Hyderabad, Maruti Authorized Service Center Near Me, etc.'
        canonicalUrl='https://www.saboomaruti.in/maruti-suzuki-cng-cars'
        ogImage='/img/og-tags/default.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      <img
        src={cngBanner}
        className='w-full lg:mt-20'
        alt='banner'
      />
      <p className='mt-4 text-2xl text-center text-green-500'>
        Maruti CNG Cars
      </p>
      <p className='px-5 mb-4 text-sm text-center'>
        Our professional and well trained staff is ready to assist you.
      </p>
      <div className='container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        {cngProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5' />
                  <div>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      &nbsp;{item.price}
                      <sup>*</sup>
                    </p>{' '}
                    <p className='font-light'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center pb-5 space-x-3'>
                  <Link
                    to={item.explore}
                    className='bg-green-700 hover:bg-red-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
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
}

export default CngCars;
