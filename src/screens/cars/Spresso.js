import React, { useState, useRef } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
// import { Dialog, Transition } from '@headlessui/react';
import { carsData } from '../../constants';
import SpressoBanner from '../../assets/banners/Website_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import PriceTable from '../reusable/pricetable';
import CarDetails from '../reusable/cardslider';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';
import { LazyImage } from '../about/About';
import { VehicleSEO, vehicleSchema } from '../../constants/SEOData';
import CarFaq from '../../components/SEo/CarFaq';

const {
  colors: spressoColors,
  sliders: spressoSliders,
  variants: spressoVariants,
  mileage: spressoMileage,
  data: spressoData,
} = carsData.spresso;

function Spresso() {
  const carEnquiryRef = useRef(null);

  return (
    <>
      <SeoMeta {...VehicleSEO.Spresso} />
      <StructuredData data={vehicleSchema(VehicleSEO.Spresso, 'Maruti Suzuki S-Presso')} />

      <Header />
      <LazyImage
        src={SpressoBanner}
        className='w-full max-w-full lg:mt-16'
        alt='Buy Maruti Suzuki S-Presso in Hyderabad'
      />
      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti S-Presso On-Road Price in Hyderabad
      </h1>
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={spressoSliders}
          />
        </div>
        <div>
          <CarDetails {...spressoData} />
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='S-PRESSO' carName='S-PRESSO' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>

          {/* Table and PriceTable */}
          <div className='mt-8'>
            <div className='mt-8'>
              <PriceTable
                sections={[
                  {
                    headers: ['Variants', 'Transmission', 'Price'],
                    columns: ['title', 'transmission', 'price'],
                    rows: spressoVariants,
                  },
                  {
                    headers: ['FUELTYPE', 'Transmission', 'Mileage'],
                    columns: ['fueltype', 'transmission', 'mileage'],
                    rows: spressoMileage,
                  },
                ]}
                disclaimer=' The prices and
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
        <div>
          {' '}
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/new-spresso/new-spresso-brochure.webp'
            alt='brochure'
            className='w-full'
          />
        </div>
      </div>

      <CarFaq
        carName='Maruti S-Presso'
        cngUrl='/maruti-s-presso-cng-on-road-price-in-hyderabad'
      />
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container flex flex-col items-center py-8 mx-auto mt-16 bg-gray-100 rounded-3xl'>
      {spressoColors.map((item) => (
        <LazyImage
          key={item.id}
          src={item.img}
          className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
          alt={item.id}
        />
      ))}
      <div className='flex items-center justify-center space-x-3 space-y-1 sm:space-y-0'>
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 bg-[#004eba] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#004eba]'
          }
          onClick={() => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#909090] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#909090]'
          }
          onClick={() => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#ec6904] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#ec6904]'
          }
          onClick={() => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#AB0F13] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#AB0F13]'
          }
          onClick={() => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#D2CFD0] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#D2CFD0]'
          }
          onClick={() => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#040404] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#040404]'
          }
          onClick={() => setCurrent(6)}
        ></p>
      </div>
    </div>
  );
};

export default Spresso;
