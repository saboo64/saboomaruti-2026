import React, { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import TourH3Logo from '../../assets/banners/Tour-H3_logo.png';
import TourH3Image from '../../assets/banners/wagonR.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';

function TourH3Wagonr() {
  const [price, setPrice] = useState('5,51,500');

  return (
    <>
      <SeoMeta
        title='Maruti WagonR Tour H3 Commercial Sankranti Offers 2026 – Best Price at Popular RKS Hyderabad'
        description='Celebrate Sankranti 2026 with exclusive festive offers on the Maruti WagonR Tour H3 Commercial at Popular RKS, Hyderabad. Get the best on-road price, popular RKS Sankranti discounts, low EMI options & quick delivery. Limited-time festive deals – Book now!'
        keywords='Maruti WagonR Tour H3 Sankranti offers 2026, WagonR Tour H3 commercial Sankranti discounts, Popular RKS  WagonR Tour H3 offers, Popular RKS Sankranti deals WagonR Tour H3, Buy WagonR Tour H3 Commercial Hyderabad, WagonR Tour H3 best price Sankranti 2026, Maruti WagonR Tour H3 commercial vehicle Popular RKS'
        canonicalUrl='https://www.saboomaruti.in/tour/maruti-wagnor-tour-h3-on-road-price-in-hyderabad'
        ogImage='/img/og-tags/wagonr-tour-h3.webp'
      />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/wagonr-tour-h3/TourH3_Title_1.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
        id='overview'
      />

      {/* build new module */}
      <div className='container flex flex-wrap items-center justify-between p-5 mx-auto lg:px-0'>
        <img
          className='flex flex-wrap items-center object-left'
          src={TourH3Logo}
          alt='vehicle_banner'
        />
        <div>
          <div className='flex items-center p-5 space-x-5'>
            <div>
              <p>Petrol</p>
              <p>
                25.19 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                34.05 &nbsp; <span className='text-red-600'>km/kg*</span>
              </p>
            </div>
          </div>
          <p className='text-xs'>
            *As certified by Test Agency Under Rule 115 (G) of CMVR 1989
          </p>
        </div>
        <div className='p-5'>
          <p className='font-bold'>
            ₹ {price} <span className='text-red-600'>*</span>
          </p>
          <p>Select Car Variant</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='5,51,500'>TOUR H3 1L</option>
            <option value='6,41,500'>TOUR H3 CNG 1L</option>
          </select>
        </div>
      </div>
      <div className='container p-5 mx-auto'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/wagonr-tour-h3/Celerio_performance_txt.png'
              alt='1'
            />
            <p className='p-2'>
              The Tour H3 is Powered by the 1.0 L Next Gen K-series Dual Jet
              Dual VVT Engine with Idle Start Stop Technology (In Petrol
              Variant) . It has manual air conditioner with heater, Front and
              Rear Integrated Headrest and Front power windows. All to make your
              customers relaxed and comfortable throughout the journey.
            </p>
            <ul className='p-2 list-disc'>
              <li>High Thermal Efficiency Gasoline Engine</li>
              <li>Efficient Responsive Engine</li>
            </ul>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/wagonr-tour-h3/safety-txt.png'
              className='p-5'
              alt='1'
            />

            <p className='p-2'>
              You drive better when you know you are safe. This is exactly what
              the safety features of the Maruti Suzuki Tour H1 do for you. With
              the driver side airbag, the improved braking system and the
              central door locking mechanism, you can leave all your worries
              behind and drive freely.
            </p>
            <ul className='p-2 list-disc'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src={TourH3Image}
            className='w-full pt-10 md:w-auto'
            alt='1'
            id='enquiry'
          />
        </div>
      </div>

      {/* <TourH3CarEnquiry /> */}
      <CarEnquiryDown title='TOUR-H3' carName='TOUR-H3' id='specs' />
      <div className='container mx-auto'>
        <Accordian />
      </div>
    </>
  );
}

const Accordian = () => {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-start'>
          <Tab.List className='p-5 space-x-1'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-blue-800 text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-blue-800 text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>Features</p>
                <p className='flex-1 px-5 py-3 border'>TOUR H1 PETROL</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Aero Edger Design
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Trendy Headlamps
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Sporty Front Bumper and Grille
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Outside Mirror (RH, LH Side)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ORVM Type</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Pivot Type
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual-tone interiors
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          B &#38; C Pillar Upper Trims
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          C Pillar Lower Trim (Molded)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Upholstery
                        </p>

                        <p className='flex-1 px-5 py-3 text-center border'>
                          Fabric + Vinyl
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent Inside Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent on Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent on Louvers
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>COMFORT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Air Conditioner With Heater
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Steering
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Power Windows
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Assist Grips (Co - Dr. +)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Digital Clock (In Speedometer Display)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Sun Visor</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Dr.+Co Dr.
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          RR Seat Head Test - Integrated Type
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Back Door Opener
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Fuel Lid Opener
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        SAFETY AND SECURITY
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headlight Leveling
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          RR Seat belt ELR Type
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Mounted Stop Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Immobiliser</p>

                        <p className='flex-1 px-5 py-3 text-center border'>
                          Fabric + Vinyl
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Wiper & Washer
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          2 Speed + Intermittent
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Collapsible Steering Column
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tubeless Tyres
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Airbag
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>
                          Passenger Airbag
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensor
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ABS with EBD</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder - Dr.+ Co Dr `
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Speed Limit
                        </p>
                        <p className='flex-1 px-5 py-3 border'>80 km/h</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>UTILITY</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Console Bottle Holder
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Console Bottle Holder
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Door Trim Map Pocket (Dr.)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Door Trim Map Pocket (Passenger)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Standard
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>SPECIFICATIONS</p>
                <p className='flex-1 px-5 py-3 border'>TOUR H1 PETROL</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Length
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          3455 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1490 mm (Without side molding)
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1475 mm (Unladen)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          2360 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          4.6 m
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tread (Front)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1295 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tread (Rear)</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1290 mm
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Kerb Weight</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          755 / 757 kg
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1185 kg
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Engine Type</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          F8D
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Swept Volume</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          796 CC
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Power
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          35.3 kW @ 6000 rpm
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          69 Nm @3500 rpm
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Transmission</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Type</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          5 Speed MT
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Type</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Cable Type Gear Shift
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>5</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          35 L
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Front</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Disc
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Drum
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className='px-5 text-xs'>
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <br></br>
    </>
  );
};

export default TourH3Wagonr;
