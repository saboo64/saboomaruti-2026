import React, { useRef } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import {
  wagonrColors,
  wagonrData,
  wagonrMileage,
  wagonrSliders,
  wagonrVariants,
} from '../../constants/wagonrData';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import PriceTable from '../reusable/pricetable';
import CarDetails from '../reusable/cardslider';
import Wagonrbanner from '../../assets/banners/Saboo-RKS-Maruti-Suzuki-WagonR-Now-6-Airbags.webp';
import Wagonrbanner2 from '../../assets/banners/vehicles/banners-2024/Wesbite_Mobile_Maruti_Suzuki_Arena_WagonR_Waltz_Edition_Saboo_RKS_Motor.webp';
import SeoMeta from '../../components/SEo/SeoMeta';
import { LazyImage } from '../about/About';
import Colors from '../reusable/color';
import { VehicleSEO } from '../../constants/SEOData';
function Wagonr() {
  const carEnquiryRef = useRef(null);
  // const scrollToCarEnquiry = () => {
  //   if (carEnquiryRef.current) {
  //     carEnquiryRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <>
      <Header />
      <SeoMeta {...VehicleSEO.Wagonr} />

      <LazyImage
        src={Wagonrbanner}
        alt=' Maruti Suzuki Arena WagonR Waltz Edition Popular RKS'
        className='hidden w-full mt-14 sm:block'
      />
      <LazyImage
        src={Wagonrbanner2}
        alt='Mobile Maruti Suzuki Arena WagonR Waltz Edition Popular RKS'
        className='w-full sm:hidden'
      />

      {/* <img
        src={WagonR}
        className="w-full max-w-full lg:mt-16"
        alt="Buy Maruti Suzuki Wagon r 2024 in Hyderabad"
      /> */}
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={wagonrSliders}
          />
        </div>
        <div className=''>
          <CarDetails {...wagonrData} />
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='mx-5'>
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='mb-4 lg:w-1/2 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='WAGON-R' carName='WAGON-R' />
            </div>
            <div className='lg:w-1/2'>
              <Colors colors={wagonrColors} />
            </div>
          </div>
          <div className='mt-8 '>
            <PriceTable
              sections={[
                {
                  headers: ['Variants', 'Transmission', 'Price'],
                  columns: ['title', 'transmission', 'price'],
                  rows: wagonrVariants,
                },
                {
                  headers: ['FUELTYPE', 'Transmission', 'Mileage'],
                  columns: ['fueltype', 'transmission', 'mileage'],
                  rows: wagonrMileage,
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
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-wagon-r/new_WagonR_Brochure.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

export default Wagonr;
