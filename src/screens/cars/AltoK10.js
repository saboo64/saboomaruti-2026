import React, { useState, Fragment, useRef } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { carsData } from '../../constants';
import AltoK10Banner from '../../assets/banners/Saboo-RKS-Maruti-Suzuki-Alto-k10-Now-6-Airbags.webp';
import Header from '../../components/header/Header';

import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import PriceTable from '../reusable/pricetable';
import CarDetails from '../reusable/cardslider';
import { LazyImage } from '../about/About';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';
import { VehicleSEO, vehicleSchema } from '../../constants/SEOData';
import CarFaq from '../../components/SEo/CarFaq';

const {
  colors: altoK10Colors,
  sliders: altoK10Sliders,
  variants: altoK10Variants,
  data: altok10Data,
  mileage: altok10Mileage,
} = carsData.altoK10;

function AltoK10() {
  const carEnquiryRef = useRef(null);
  return (
    <>
      <SeoMeta {...VehicleSEO.AltoK10} />
      <StructuredData data={vehicleSchema(VehicleSEO.AltoK10, 'Maruti Suzuki Alto K10')} />

      <Header />

      <LazyImage
        src={AltoK10Banner}
        className='w-full max-w-full lg:mt-16'
        alt='Buy Maruti Suzuki Alto K10 in Hyderabad'
      />
      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti Alto K10 On-Road Price in Hyderabad
      </h1>
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={altoK10Sliders}
          />
        </div>
        <div>
          <CarDetails {...altok10Data} />
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='mx-5'>
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='ALTOK10' carName='ALTOK10' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>

          <div className='mt-8'>
            <PriceTable
              sections={[
                {
                  headers: ['Variants', 'Transmission', 'Price'],
                  columns: ['title', 'transmission', 'price'],
                  rows: altok10Mileage,
                },
                {
                  headers: ['Variants', 'Transmission', 'Mileage'],
                  columns: ['title', 'transmission', 'mileage'],
                  rows: altoK10Variants,
                },
              ]}
              disclaimer='The prices and mileage information provided above are indicative and may vary. Please check with your nearest dealership.'
            />
          </div>
        </div>
      </div>

      <div>
        <img
          //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-prospectus.webp"
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-prospectus.webp'
          alt='brochure'
          className='w-full'
        />
      </div>

      <CarFaq carName='Maruti Alto K10' cngUrl='/alto-k10-cng' />
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='mt-8 bg-gray-100 border rounded-3xl'>
      {' '}
      <div className='container flex flex-col items-center py-12 mx-auto mt-12'>
        {altoK10Colors.map((item) => (
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
            } h-5 rounded-full w-5 bg-[#BF001B]`}
            onClick={() => setCurrent(1)}
          ></p>
          <p
            className={`${
              current === 2 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#1F2FDC]`}
            onClick={() => setCurrent(2)}
          ></p>
          <p
            className={`${
              current === 3 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#3e403f]`}
            onClick={() => setCurrent(3)}
          ></p>

          <p
            className={`${
              current === 4 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#b3b5b0]`}
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={`${
              current === 5 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#dce0e1]`}
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={`${
              current === 6 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#dd9c6b]`}
            onClick={() => setCurrent(6)}
          ></p>
          <p
            className={`${
              current === 7 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#0F1112]`}
            onClick={() => setCurrent(7)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default AltoK10;
