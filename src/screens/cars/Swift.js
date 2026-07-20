import React, { useState, Fragment, useRef } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import {
  swiftColors,
  swiftSliders,
  swiftVariants,
  swiftMileage,
  swiftData,
} from '../../constants/swiftData';
import Swiftbanner from '../../assets/banners/Arena new Swift banner.webp';
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
// import { Link } from 'react-router-dom';

function Swift() {
  const carEnquiryRef = useRef(null);

  return (
    <>
      <SeoMeta {...VehicleSEO.Swift} />
      <StructuredData data={vehicleSchema(VehicleSEO.Swift, 'Maruti Suzuki Swift')} />

      <Header />

      <LazyImage
        src={Swiftbanner}
        className='w-full max-w-full lg:mt-16'
        alt='Buy Maruti Suzuki new Swift 2024 in Hyderabad'
      />

      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti Swift On-Road Price in Hyderabad
      </h1>

      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={swiftSliders}
          />
        </div>
        <div>
          <CarDetails {...swiftData} />
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='SWIFT' carName='EPIC-SWIFT-2024' />
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
                  rows: swiftVariants,
                },
                {
                  headers: ['FUELTYPE', 'Transmission', 'Mileage'],
                  columns: ['fueltype', 'transmission', 'mileage'],
                  rows: swiftMileage,
                },
              ]}
              disclaimer=' The prices and
          mileage information provided in the table above are indicative and
          subject to change for Swift 2024. The actual prices and mileage of
          Maruti Suzuki Swift 2024 may vary based on factors such as location,
          dealer, variant, and other applicable conditions. For the most
          accurate and up-to-date information, please contact your nearest Popular
          RKS  Maruti Suzuki dealership.'
            />
          </div>
        </div>
      </div>

      <div>
        {' '}
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/banners/Maruti_Suzuki_New_Swift_2024_Specification_Details-01.webp'
          alt='brochure'
          className='w-full'
        />
      </div>

      <CarFaq
        carName='Maruti Swift'
        cngUrl='/maruti-swift-cng-on-road-price-in-hyderabad'
      />
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='mt-8 bg-gray-100 border rounded-3xl' id='enquiry'>
      {' '}
      <div className='container flex flex-col items-center py-12 mx-auto mt-12'>
        {swiftColors.map((item) => (
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
                ? 'h-5 rounded-full w-5 bg-[#fff] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#fff] '
            }
            onClick={() => setCurrent(1)}
          ></p>

          <p
            className={
              current === 2
                ? 'h-5 rounded-full w-5 bg-[#aeaeaf] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#aeaeaf]'
            }
            onClick={() => setCurrent(2)}
          ></p>
          <p
            className={
              current === 3
                ? 'h-5 rounded-full w-5 bg-[#6a6a65] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#6a6a65]'
            }
            onClick={() => setCurrent(3)}
          ></p>
          <p
            className={
              current === 4
                ? 'h-5 rounded-full w-5 bg-[#bf4315] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#bf4315]'
            }
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={
              current === 5
                ? 'h-5 rounded-full w-5 bg-[#113f73] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#113f73]'
            }
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={
              current === 6
                ? 'h-5 rounded-full w-5 bg-[#d82929] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#d82929]'
            }
            onClick={() => setCurrent(6)}
          ></p>
          <p
            className={
              current === 7
                ? 'h-5 rounded-full w-5 animate-bounce'
                : 'h-5 rounded-full w-5 '
            }
            style={{
              backgroundImage:
                "url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/pa-white--pm-black.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(7)}
          ></p>
          <p
            className={
              current === 8
                ? 'h-5 rounded-full w-5 animate-bounce'
                : 'h-5 rounded-full w-5 '
            }
            style={{
              backgroundImage:
                "url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/pmm-blue--pa-white.webp')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(8)}
          ></p>
          <p
            className={
              current === 9
                ? 'h-5 rounded-full w-5 animate-bounce'
                : 'h-5 rounded-full w-5 '
            }
            style={{
              backgroundImage:
                "url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/msr-red--pm-black.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(9)}
          ></p>

          {/* <p
        className={
          current === 6
            ? 'h-5 rounded-full w-5 animate-bounce'
            : 'h-5 rounded-full w-5'
        }
        style={{
          background:
            'linear-gradient(61deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%)',
        }}
        onClick={(e) => setCurrent(6)}
      ></p> */}
        </div>
      </div>
    </div>
  );
};

export default Swift;
