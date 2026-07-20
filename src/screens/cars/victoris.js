import Header from '../../components/header/Header';
import { LazyImage } from '../about/About';
import ImageGallery from 'react-image-gallery';
import {
  victoriesSliders,
  victoriesData,
  victorisColors,
  victoriesVariants,
  VictoriesMileage,
} from '../../constants/victoris';
import CarDetails from '../reusable/cardslider';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import React, { useState } from 'react';
import { TbView360, Tb360View } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';

import View360 from '../../components/360degree/View360';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';
import { VehicleSEO, vehicleSchema } from '../../constants/SEOData';
import PriceTable from '../reusable/pricetable';
import CarFaq from '../../components/SEo/CarFaq';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Define the video source URL based on the browser
const videoSource = isSafari
  ? 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/video/Maruti+2BSuzuki+2BArena+2Bvictoris+2Bsaboo+2Brks-2.mov'
  : 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/video/Maruti%252BSuzuki%252BArena%252Bvictoris%252Bsaboo%252Brks-2.mp4';

export default function victoris() {
  return (
    <div>
      <SeoMeta {...VehicleSEO.Victoris} />
      <StructuredData data={vehicleSchema(VehicleSEO.Victoris, 'Maruti Suzuki Victoris')} />
      <Header />
      <div className='relative w-full '>
        {/* Video Background */}
        <video
          className='absolute top-0 left-0 object-cover w-full h-full'
          preload='metadata'
          loop
          autoPlay
          playsInline
          muted
          poster='https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:66f35445-6dde-4e98-8aef-3aab746cc6d9/as/Banner_desktop.png?width=2000&id=1&preferwebp=true'
        >
          <source
            src={videoSource}
            type={isSafari ? 'video/quicktime' : 'video/mp4'}
          />
        </video>

        {/* Overlay Content */}
        <div className='relative z-10 flex flex-col justify-center h-[70vh] px-4 sm:px-8 md:px-12 text-white'>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='500'
            className='text-xl sm:text-2xl md:text-3xl'
          >
            PRESENTING
          </div>

          <h1
            data-aos='fade-right'
            data-aos-delay='400'
            data-aos-duration='500'
            className='font-serif text-4xl uppercase sm:text-5xl md:text-6xl lg:text-8xl'
          >
            Maruti Suzuki Victoris
          </h1>

          <div
            data-aos='fade-right'
            data-aos-delay='600'
            data-aos-duration='1000'
            className='mt-2 text-lg uppercase sm:text-2xl md:text-4xl lg:text-5xl'
          >
            GOT IT ALL
          </div>

          <div className='mt-4'>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/brochure/Maruti-Suzuki-Arena-Victoris-Brochure.pdf'
              target='_blank'
              rel='noreferrer'
              aria-label='Brochure'
            >
              <button
                data-aos='fade-right'
                data-aos-delay='800'
                data-aos-duration='1000'
                className='px-6 py-2 text-sm font-medium uppercase transition-all duration-300 border border-white hover:bg-white hover:text-black sm:px-8 sm:text-base'
              >
                Brochure
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <LazyImage
        src='https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:66f35445-6dde-4e98-8aef-3aab746cc6d9/as/Banner_desktop.png?width=2000&id=1&preferwebp=true'
        className='w-full max-w-full '
        alt='Buy Maruti Suzuki  Hyderabad'
      /> */}
      <div className='container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={victoriesSliders}
          />
        </div>
        <div>
          <CarDetails {...victoriesData} />
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='mb-4 lg:w-1/2 lg:mb-0'>
              <CarEnquiryDown title='Victoris' carName='Victoris' />
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
                  rows: victoriesVariants,
                },
                {
                  headers: ['FUELTYPE', 'Transmission', 'Mileage'],
                  columns: ['fueltype', 'transmission', 'mileage'],
                  rows: VictoriesMileage,
                },
              ]}
              disclaimer=' The prices and
          mileage information provided in the table above are indicative and
          subject to change for Swift 2024. The actual prices and mileage of
          Maruti Suzuki Swift 2024 may vary based on factors such as location,
          dealer, variant, and other applicable conditions. For the most
          accurate and up-to-date information, please contact your nearest Saboo
          RKS Motor Maruti Suzuki dealership.'
            />
          </div>
        </div>
      </div>

      <Victoris360 />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/Saboo+RKS+Maruti+Suzuki+Victoris+Web+Brochure.webp'
        alt='brochure'
        className='w-full'
      />

      <CarFaq carName='Maruti Suzuki Victoris' />
    </div>
  );
}

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='mt-8 bg-gray-100 border rounded-3xl' id='enquiry'>
      {' '}
      <div className='container flex flex-col items-center py-12 mx-auto mt-12'>
        {victorisColors.map((item) => (
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
            style={{
              backgroundImage:
                "url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/blue.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(1)}
          ></p>

          <p
            className={
              current === 2
                ? 'h-5 rounded-full w-5 bg-[#aeaeaf] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#aeaeaf]'
            }
            style={{
              backgroundImage:
                "url('  https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/splended-silver-bluish.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
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
            style={{
              backgroundImage:
                "url(' https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/red-black.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={
              current === 5
                ? 'h-5 rounded-full w-5 bg-[#dd0b0b] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#e11010]'
            }
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={
              current === 6
                ? 'h-5 rounded-full w-5 bg-[#17262D] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#17262D]'
            }
            onClick={() => setCurrent(6)}
          ></p>
          <p
            className={
              current === 8
                ? 'h-5 rounded-full w-5 animate-bounce'
                : 'h-5 rounded-full w-5 '
            }
            style={{
              backgroundImage:
                "url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/pa-white--pm-black.png')", // Replace 'your-image-url.jpg' with the actual URL of your image
              backgroundSize: 'cover', // Optional: Adjust the background size as needed
              backgroundPosition: 'center', // Optional: Adjust the background position as needed
            }}
            onClick={() => setCurrent(8)}
          ></p>
          <p
            className={
              current === 7
                ? 'h-5 rounded-full w-5 bg-[#2c0c0c] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#200505]'
            }
            onClick={() => setCurrent(7)}
          ></p>
          {/* <p
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
          ></p> */}

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

const Victoris360 = () => {
  return (
    <div
      className='relative bg-center bg-no-repeat bg-cover bg-[#d6d6d6]'
      style={
        {
          //   backgroundImage: "url('https://your-image-url-here.jpg')",
        }
      }
    >
      <div className='bg-opacity-50 '>
        {/* Small screen title */}
        <div className='text-center'>
          <div className='w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden'>
            360
            <sup>
              <span className='text-lg'>0</span>
            </sup>{' '}
            View
          </div>
       
        </div>

        {/* View360 Component */}
        <div className='relative w-full max-w-7xl mx-auto px-4 h-[200px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[670px]'>
          {/* Force View360 container height */}
          <div className='flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='w-full h-full '>
              <View360
                path='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/360'
                count={35}
                format='png'
              />
            </div>
          </div>
          {/* Left/Right Arrows */}
          <div className='absolute left-0 flex flex-col items-center text-black -translate-y-1/2 top-1/2 sm:left-2 md-left-2 lg:left-[0px] 2xl:left-[-100px]  z-10'>
            <GiReturnArrow className='text-3xl rotate-180 lg:text-5xl animate-pulse' />
          </div>

          <div className='absolute right-0 flex flex-col items-center text-black -translate-y-1/2 top-1/2 sm:right-10 md:right-2 lg:right-[0px] 2xl:right-[-100px] '>
            <GiReturnArrow className='text-3xl lg:text-5xl animate-pulse' />
          </div>

          {/* 360 Icons and Text for Desktop */}
          <div className='absolute flex-col items-center hidden w-full text-black lg:flex top-6'>
            <div className='text-4xl font-bold uppercase'>
              360
              <sup>
                <span className='text-lg'>0</span>
              </sup>{' '}
              View
            </div>
            {/* <div className="mt-2 text-lg text-black">
            Take a 360-degree look around the Evitara and get to know it better.
            </div> */}
          </div>

          {/* Icon Left Top for md+ */}
          <div className='absolute flex-col items-center hidden text-black md:flex top-6 left-6'>
            <TbView360 className='text-3xl lg:text-5xl animate-pulse' />
            <Tb360View className='text-xl lg:text-4xl' />
          </div>
        </div>
      </div>
    </div>
  );
};
