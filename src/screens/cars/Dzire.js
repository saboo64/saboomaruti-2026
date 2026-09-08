import React, { useRef, useState, Fragment } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import banner from '../../assets/banners/vehicles/Dazzling New Dzire Single page Brochure1-01.webp';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import banner2 from '../../assets/banners/vehicles/banners-2024/Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor.webp';
import { carsData } from '../../constants';
import banner3 from '../../assets/banners/vehicles/banners-2024/Website_Mobile_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor.webp';
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
  colors: dzireColors,
  sliders: dzireSliders,
  variants: dzireVariants,
  mileage: dzireMileage,
  data: dzireData,
} = carsData.dzire;

function Dzire() {
  const carEnquiryRef = useRef(null);
  // const scrollToCarEnquiry = () => {
  //   if (carEnquiryRef.current) {
  //     carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      <SeoMeta {...VehicleSEO.Dzire} />
      <StructuredData data={vehicleSchema(VehicleSEO.Dzire, 'Maruti Suzuki Dzire')} />
      <Header />
      {/* <img
        src={require("../../assets/banners/Dzire 2.webp")}
        className="w-full max-w-full lg:mt-16"
        alt="Buy Maruti Suzuki Swift Dzire 2023 in Hyderabad"
      /> */}
      <LazyImage
        src={banner2}
        alt='Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor'
        className='hidden w-full max-w-full lg:mt-16 md:block'
      />
      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti Swift Dzire On-Road Price in Hyderabad
      </h1>
      <LazyImage
        src={banner3}
        alt='Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor'
        className='w-full max-w-full lg:mt-16 md:hidden'
      />
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={dzireSliders}
          />
        </div>
        <div>
          <CarDetails {...dzireData} />
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='DZIRE' carName='DZIRE' />
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
                  rows: dzireVariants,
                },
                {
                  headers: ['Variants', 'Transmission', 'Mileage'],
                  columns: ['title', 'transmission', 'mileage'],
                  rows: dzireMileage,
                },
              ]}
              disclaimer='The prices and
          mileage information provided in the table above are indicative and
          subject to change. The actual prices and mileage of Maruti Suzuki
          vehicles may vary based on factors such as location, dealer, variant,
          and other applicable conditions. For the most accurate and up-to-date
          information, please contact your nearest Popular RKS  Maruti Suzuki
          dealership.'
            />
          </div>
        </div>
      </div>
      <div>
        {' '}
        <img
          src={banner}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-dzire/Dzire_Product_brochure.webp"
          alt='brochure'
          className='w-full mx-auto'
        />
      </div>

      <CarFaq
        carName='Maruti Swift Dzire'
        cngUrl='/maruti-swift-dzire-cng-on-road-price-in-hyderabad'
      />
    </>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container flex flex-col items-center py-8 mx-auto mt-16 bg-gray-100 rounded-3xl'>
      {dzireColors.map((item) => (
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
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#C0C0C0] animate-bounce '
              : 'h-5 rounded-full w-5 bg-[#C0C0C0]'
          }
          onClick={() => setCurrent(2)}
        ></p>{' '}
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 bg-[#E4EDF1] animate-bounce shadow-lg'
              : 'h-5 rounded-full w-5 bg-[#E4EDF1] shadow-lg border'
          }
          onClick={() => setCurrent(1)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#8F867E] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#8F867E]'
          }
          onClick={() => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#000] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#000]'
          }
          onClick={() => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#795F4F] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#795F4F]'
          }
          onClick={() => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#415159] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#415159]'
          }
          onClick={() => setCurrent(6)}
        ></p>
        {/* <p
          className={
            current === 7
              ? "h-5 rounded-full w-5 bg-[#7d4242] animate-bounce"
              : "h-5 rounded-full w-5 bg-[#0f0f0f]"
          }
          onClick={(e) => setCurrent(7)}
        ></p> */}
      </div>
    </div>
  );
};

export default Dzire;
