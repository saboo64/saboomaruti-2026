import React from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import AltoCNG1 from '../../assets/banners/arena-k10-cng-thumbnail.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';
import { CNGvehicleSeo } from '../../constants/SEOData';

function AltoK10CNG() {
  return (
    <>
      <SeoMeta {...CNGvehicleSeo.AltoK10CNG} />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-k10-cng/arena-k10-cng-product-image.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <div className='container py-6 pt-6 mx-auto md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>New Alto K10 S-CNG</p>
            <p className='font-bold text-green-900'>
              5.96 Lakh <sup>*</sup>
              <p className='font-light text-red-400'>ex-show room price</p>
            </p>

            <p className='text-s'>
              The All-New Alto K10 S-CNG is now ready for you to take off on a
              journey that’s not just joyful and exciting but also efficient.
            </p>
            <br></br>
            <p className='text-s'>
              The All-New Alto K10 VXi S-CNG features a factory-fitted S-CNG kit
              with a leakproof design to ensure that safety is not compromised.
              The use of advanced components contributes to the engine’s longer
              lifespan. What’s more, it also comes equipped with the Next-Gen K
              series 1.0 L Dual Jet, Dual VVT engine which offers you a smoother
              pickup, great drivability, and overall superior performance
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon1.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon2.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon3.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain object-right h-50 w-100 pt-14'>
            <img src={AltoCNG1} alt='vehicle_banner' />
          </div>
        </div>
      </div>

      {/* alto k10 cng form */}
      {/* <Altok10CarEnquiry /> */}
      <CarEnquiryDown title='ALTO-K10 CNG' carName='ALTO-K10 CNG' />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>
              Alto K10 S-CNG features
            </p>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-k10/K10+logo+for+CNG+page.jpg'
              className='h-20'
              alt='alto-logo'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto lg:-mt-10'>
        <Accordian />
      </div>
    </>
  );
}

function Accordian() {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-end'>
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
                <p className='flex-1 px-5 py-3 border'>VXI CNG</p>
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
                        <p className='flex-1 px-5 py-3 border '>Roof Antenna</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Outside door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Bumpers
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheel Covers</p>
                        <p className='flex-1 px-5 py-3 border'>Full</p>
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
                          Front Console Utility Space
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          1L Bottle Holder in Front Doors With Map Pockets
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Sun Visor</p>
                        <p className='flex-1 px-5 py-3 border'>Dr.+Co Dr.</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Assist Grips</p>
                        <p className='flex-1 px-5 py-3 border'>Co-Dr. + Rear</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent Inside Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent on Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Accent on Louvers
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                        COMFORT AND CONVENIENCE
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
                          Cabin Air Filter
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Power Windows
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Internally Adjustable ORVMs
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Back Door Opener
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Fuel Lid Opener
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Accessory Socket
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Air Conditioner with Heater
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Steering
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>INFOTAINMENT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Media Receiver (AM/FM/Bluetooth)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>AUX Port</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>USB Port</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Bluetooth</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Speakers</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Digital Speedometer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Consumption(Instantaneous & Average)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Low Fuel Warning
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          SmartPlay Dock
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Ajar Warning
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          SmartPlay Dock
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Key off/Head lamp on Reminder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                        SAFETY & SECURITY
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
                          Rear Door Child Lock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Immobiliser
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Speed Sensing Auto Door Lock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Door Locking
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Impact Sensing Door Unlock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Speed Alert^
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belt Pre-Tentioner & Force Limiter
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Seat Belt (ELR Type)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual Front Airbags##
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ABS with EBD</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensor
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder - Dr.+Co-Dr.
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ABS with EBD</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          HEARTECT Platform
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headlamp Levelling
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High-Mounted Stop Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Collapsible Steering Column
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>Specifications</p>
                <p className='flex-1 px-5 py-3 border'>VXI CNG</p>
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
                        <p className='flex-1 px-5 py-3 border'>3520 mm</p>
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
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1515 mm (With side molding)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1520 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2360 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4.5 m</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Seating</p>
                        <p className='flex-1 px-5 py-3 border'>4 Persons</p>
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
                        <p className='flex-1 px-5 py-3 border'>K10C CNG</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Fuel Type</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol + CNG</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Piston Displacement
                        </p>
                        <p className='flex-1 px-5 py-3 border'>998 cc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Power (1kW = 1.35962 PS)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol Mode: 48 kW @ 5500 rpm CNG Mode: 41.7 kW @ 5300
                          rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol Mode: 89 Nm @ 3500 rpm CNG Mode: 82.1 Nm @ 3400
                          rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Emission Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol: 27 L CNG Mode: 55 (Water Equivalent)
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
                        <p className='flex-1 px-5 py-3 border '>
                          Transmission Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>5 MT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Suspension</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Front</p>
                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson strut
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Torsion Beam with Coil Spring
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* <Disclosure>
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
                        <p className='flex-1 px-5 py-3 border'>4</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border '>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>35 L</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure> */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Tyres</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tyre Size</p>
                        <p className='flex-1 px-5 py-3 border'>145/80 R13</p>
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
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
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
      {/* <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 '>
        <div className='px-6 my-auto space-y-3 text-left '>
          <p className='text-4xl font-bold uppercase'>New Alto K10 S-CNG</p>
        </div>
        <div className='object-contain object-right h-50 w-100 pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW ALTO K10
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p className='indent-8'>
                    There are basically three fuel modes in the New Alto K10
                    S-CNG, which are listed below: Petrol Mode – In this mode,
                    the car starts and drives on Petrol. Auto Mode – In this
                    mode, the car starts on Petrol and then automatically
                    switches over to CNG (This is also the mode that is
                    recommended by the company). Forced CNG mode – In this mode,
                    you are allowed to start the car on CNG. This is a mode that
                    is only advised when there is no petrol in the car
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    2. WHAT SHOULD I DO IF THE CNG MALFUNCTION WARNING LIGHT IN
                    MY ALTO K10 S-CNG KEEPS GLOWING WHEN I AM DRIVING?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    The reason behind such a situation may vary. So, it is
                    recommended that you take your car to the Maruti Suzuki
                    authorized service centre nearest to you.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    3. CAN I GET MY NEW ALTO S-CNG TUNED FROM OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    Getting your CNG kit tuned from outside is something that is
                    not advisable at all. Since the Alto K10 S-CNG comes
                    equipped with factory-fitted CNG kit, the right tuning
                    equipment for properly calibrating the kit will only be
                    available at a Maruti Suzuki authorized service centre.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div> */}
    </>
  );
}

export default AltoK10CNG;
