import React, { useState, useRef } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

import { carsData } from '../../constants';
import BrezzaBanner from '../../assets/banners/Saboo-RKS-Maruti-Suzuki-Brezza-Now-6-Airbags.webp';
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
  colors: brezzaColors,
  sliders: brezzaSliders,
  variants: brezzaVariants,
  mileage: brezzaMileage,
  data: brezzaData,
} = carsData.brezza;

function Brezza() {
  // // const [email, setEmail] = useState('');
  const carEnquiryRef = useRef(null);
  // const scrollToCarEnquiry = () => {
  //   if (carEnquiryRef.current) {
  //     carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <SeoMeta {...VehicleSEO.Brezza} />
      <StructuredData data={vehicleSchema(VehicleSEO.Brezza, 'Maruti Suzuki Brezza')} />
      <Header />
      <LazyImage
        src={BrezzaBanner}
        className='w-full max-w-full lg:mt-16'
        alt='Buy Maruti Suzuki Brezza 2026 in Hyderabad'
      />
      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti Brezza On-Road Price in Hyderabad
      </h1>
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={brezzaSliders}
          />
        </div>
        <div>
          <CarDetails {...brezzaData} />
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='BREZZA' carName='BREZZA' />
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
                  rows: brezzaVariants,
                },
                {
                  headers: ['Variants', 'Transmission', 'Mileage'],
                  columns: ['title', 'transmission', 'mileage'],
                  rows: brezzaMileage,
                },
              ]}
              disclaimer='The prices and mileage information provided above are indicative and may vary. Please check with your nearest dealership.'
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/specifications/Brezza2022_new.webp'
          alt='brochure'
          className='w-full'
        />
      </div>

      <CarFaq
        carName='Maruti Brezza'
        cngUrl='/maruti-brezza-cng-on-road-price'
      />
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container flex flex-col items-center py-8 mx-auto mt-16 bg-gray-100 rounded-3xl'>
      {brezzaColors.map((item) => (
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
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #b8a888 50%, #17181a 50%)',
          }}
          onClick={() => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#b8a888] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#b8a888]'
          }
          onClick={() => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#5b5b5d] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#5b5b5d]'
          }
          onClick={() => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #f7f7f7 50%, #17181a 50%)',
          }}
          onClick={() => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300 animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300'
          }
          onClick={() => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#17181a] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#17181a]'
          }
          onClick={() => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #e62924 50%, #17181a 50%)',
          }}
          onClick={() => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5 bg-[#c5c5c5] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#c5c5c5]'
          }
          onClick={() => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? 'h-5 rounded-full w-5 bg-[#e8720c] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#e8720c]'
          }
          onClick={() => setCurrent(9)}
        ></p>
      </div>
    </div>
  );
};

export default Brezza;
