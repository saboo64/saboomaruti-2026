import React, { useState, Fragment, useRef } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import offerBanner from '../../assets/banners/Website_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp';

import {
  celerioColors,
  celerioData,
  celerioMileage,
  celerioSliders,
  celerioVariants,
} from '../../constants/celerioData';

import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';

import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import PriceTable from '../reusable/pricetable';
import CarDetails from '../reusable/cardslider';
import SeoMeta from '../../components/SEo/SeoMeta';
import { LazyImage } from '../about/About';
import { VehicleSEO } from '../../constants/SEOData';

function Celerio() {
  const carEnquiryRef = useRef(null);
  // const scrollToCarEnquiry = () => {
  //   if (carEnquiryRef.current) {
  //     carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      <SeoMeta {...VehicleSEO.Celerio} />
      <Header />

      <LazyImage
        src={offerBanner}
        className='w-full max-w-full lg:mt-16'
        alt='Buy Maruti Suzuki Celerio 2025 in Hyderabad'
      />
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={celerioSliders}
          />
        </div>
        <div>
          <CarDetails {...celerioData} />
        </div>
      </div>
      <div className='container mx-auto '>
        <div className='mx-5 '>
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='CELERIO' carName='CELERIO' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>
          {/* Table and PriceTable */}
          <div className='mt-8'>
            <PriceTable
              sections={[
                {
                  headers: ['Variants', 'Transmission', 'Price'],
                  columns: ['title', 'transmission', 'price'],
                  rows: celerioVariants,
                },
                {
                  headers: ['Variants', 'Transmission', 'Mileage'],
                  columns: ['title', 'transmission', 'mileage'],
                  rows: celerioMileage,
                },
              ]}
              disclaimer='The prices and
          mileage information provided in the table above are indicative and
          subject to change. The actual prices and mileage of Maruti Suzuki
          vehicles may vary based on factors such as location, dealer, variant,
          and other applicable conditions. For the most accurate and up-to-date
          information, please contact your nearest Popular RKS Maruti Suzuki
          dealership.'
            />
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <img
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-new-celerio/New_Celerio_Product_Brand_Brochure.webp"
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-new-celerio/New_Celerio_Product_Brand_Brochure.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='mt-8 bg-gray-100 border rounded-3xl'>
      {' '}
      <div className='container flex flex-col items-center py-12 mx-auto mt-12'>
        {celerioColors.map((item) => (
          <LazyImage
            key={item.id}
            src={item.img}
            className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
            alt={item.id}
          />
        ))}
        <div className='flex items-center justify-center space-x-3 space-y-1 sm:space-y-0'>
          <p
            className={`${
              current === 1 ? 'animate-bounce' : ''
            } h-5 rounded-full bg-[#6A717B] w-5`}
            onClick={() => setCurrent(1)}
          ></p>
          <p
            className={
              current === 2
                ? 'h-5 rounded-full w-5 bg-[#b3b5b0] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#b3b5b0]'
            }
            onClick={() => setCurrent(2)}
          ></p>
          <p
            className={
              current === 3
                ? 'h-5 rounded-full w-5 bg-[#FFFFFF] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#FFFFFF]'
            }
            onClick={() => setCurrent(3)}
          ></p>
          <p
            className={
              current === 4
                ? 'h-5 rounded-full w-5 bg-[#2a2967] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#2a2967]'
            }
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={
              current === 5
                ? 'h-5 rounded-full w-5 bg-[#d21314] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#d21314]'
            }
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={
              current === 6
                ? 'h-5 rounded-full w-5 bg-[#0F0F11] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#0F0F11]'
            }
            onClick={() => setCurrent(6)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Celerio;
