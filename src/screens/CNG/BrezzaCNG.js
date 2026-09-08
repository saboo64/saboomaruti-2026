import React from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';

import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import brezza_thumbnail from '../../assets/thumbnail/brezza_thumbnail.png'
// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';
import { CNGvehicleSeo } from '../../constants/SEOData';

function BrezzaCNG() {
  return (
    <>
      <SeoMeta {...CNGvehicleSeo.BrezzaCNG} />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/Website+Maruti+Suzuki+Arena+Brezza+Scng+Offers(1).webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <div className='container py-6 pt-6 mx-auto md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>BREZZA S-CNG</p>
            <p className='font-bold text-green-900'>
              9.29 Lakh <sup>*</sup>
              <p className='font-light text-red-400'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Loaded with innovative technology and a style statement to match,
              the hottest tech for the Cool New Generation has arrived to take
              your city drives to the next level. Behold the Hot and Techy
              Brezza with S-CNG technology. The city-bred SUV that’s built for
              excitement with the advanced 1.5L K Series Dual Jet, Dual VVT
              engine with factory-fitted S-CNG technology.
            </p>
            <br></br>
            <p className='text-s'>
              The S-CNG technology comes with a dual inter-dependent Electronic
              Control Unit (ECU) and Intelligent Injection System. These
              state-of-the-art innovations provide an enhanced air-fuel ratio
              for better driving performance, and at the same time give an
              incredible fuel efficiency of 25.51 km/kg#.
              <br />
              <br />
              The S-CNG kit is integrated into the mainframe of the car on the
              manufacturing floor and has a leak-proof design with
              corrosion-resistant stainless-steel pipes and joints. This
              enhances the engine’s longevity and keeps you safe on every drive.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain object-right h-50 w-100 pt-14'>
            {/* <img src={AltoCNG1} alt='vehicle_banner' /> */}
            <img
              src={brezza_thumbnail}
              alt='vehicle_banner'
            />
          </div>
        </div>
      </div>

      {/* <BrezzaCarEnquiry /> */}
      <CarEnquiryDown title='BREZZA CNG' carName='BREZZA CNG' />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>
              Brezza S-CNG features
            </p>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/logo_spec.webp'
              className='h-20'
              alt='brezza-logo'
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
                <p className='flex-1 px-5 py-3 border'>LXI CNG MT</p>
                <p className='flex-1 px-5 py-3 border'>VXI CNG MT</p>
                <p className='flex-1 px-5 py-3 border'>ZXI CNG MT</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exteriors</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Alloy Wheels</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>Painted</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steel Wheels with Wheel Cover
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Projector Headlamps
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Bi-Halogen</p>
                        <p className='flex-1 px-5 py-3 border'>Bi-Halogen</p>
                        <p className='flex-1 px-5 py-3 border'>Dual Led</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Floating LED Day Time Running Lamps
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Roof Rail</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Roof End Spoiler
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Chrome Accentuated Front Grille
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Combination Lamp (LED)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Shark Fin Antenna
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual Tone Exterior (In Selected Colours)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Wheel Arch Cladding
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Skid Plate (Fr & Rr)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Black</p>
                        <p className='flex-1 px-5 py-3 border'>Black</p>
                        <p className='flex-1 px-5 py-3 border'>Silver </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Side Under Body Cladding
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Side Door Cladding
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                      <span className='text-base uppercase'>INTERIORS</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Interior Color Theme
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Mono Tone</p>
                        <p className='flex-1 px-5 py-3 border'>Mono Tone</p>
                        <p className='flex-1 px-5 py-3 border'>Dual Tone</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Co-Driver Side Vanity Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Chrome Plated Inside Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Armrest With Fabric
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Luggage Lamp</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Footwell Illumination
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Cabin Lamp</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Flat Bottom Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Parcel Tray
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Hook In Luggage Area
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>IP Ornament</p>
                        <p className='flex-1 px-5 py-3 border'>Black</p>
                        <p className='flex-1 px-5 py-3 border'>Black</p>
                        <p className='flex-1 px-5 py-3 border'>Silver </p>
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
                          Electronic Stability Program (ESP)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Hill Hold Assist
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver & Co-Driver Airbags
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear View Camera
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belt Pre-tensioners & Force Limiter
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensor with Infographic Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Speed Warning Alert<sup>#</sup>
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder Lamp & Buzzer (Driver & Co-Driver)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Wiper & Washer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Defogger (Electric)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Anti-theft Security System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Suzuki TECT Body
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Dual Horn</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ISOFIX Child Seat Restraint System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Impact Sensing Door Unlock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Day/Night Rear View Mirror
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Manual</p>
                        <p className='flex-1 px-5 py-3 border'>Manual</p>
                        <p className='flex-1 px-5 py-3 border'>Manual</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Locking
                        </p>
                        <p className='flex-1 px-5 py-3 border'>5 Door</p>
                        <p className='flex-1 px-5 py-3 border'>5 Door</p>
                        <p className='flex-1 px-5 py-3 border'>5 Door</p>
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
                        COMFORT & CONVENIENCE
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
                          Electric Sunroof
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Cruise Control
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Height Adjustable Driver Seat
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          60:40 Split Seat (Rear)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overhead Console with Sunglass Holder & Map Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Push Start/stop With Smart Key
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Center Armrest With Cup Holder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Adjustable Rear Seat Headrest
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrically Adjustable ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrically Foldable ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Front Window (Auto Up/Down)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear AC Vents
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Auto Climate control
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Keyless Entry SystemAuto
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front & Rear Power Windows
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steering Column Adjustment
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Tilt</p>
                        <p className='flex-1 px-5 py-3 border'>Tilt</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Tilt & Telescopic
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Accessory Socket
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                          Touch Screen Audio
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>
                          17.78cm (SmartPlay Pro)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          17.78cm (SmartPlay Pro)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Premium Sound System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>ARKAMYS</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Android Auto and Apple CarPlay<sup>###</sup>
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>Wireless</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Control App for Infotainment
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steering Mounted Controls: Audio and Bluetooth
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Over the Air Update (OTA)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Onboard Voice Assistant (wake up through Hi Suzuki
                          with Barge in Feature)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          USB & Bluetooth Connectivity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Consumption (Instantaneous & Average)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Speakers (4)</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tweeters (2)</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          MID with TFT Color Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          MID with Segment Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Speedometer with Tachometer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Audible Headlight On Reminder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Low Fuel Warning Light
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                        COLOUR VARIANTS
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
                          Splendid Silver With Midnight Black Roof (Dual Tone)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Sizzling Red with Midnight Black Roof (Dual Tone)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Brave Khakhi with Arctic White Roof (Dual Tone)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Brave Khakhi</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Splendid Silver
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Sizzling Red</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Exuberant Blue
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pearl Arctic White
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Magma Grey</p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pearl Midnight Black
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
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
                <p className='flex-1 px-5 py-3 border'>LXI CNG MT</p>
                <p className='flex-1 px-5 py-3 border'>VXI CNG MT</p>
                <p className='flex-1 px-5 py-3 border'>ZXI CNG MT</p>
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
                        <p className='flex-1 px-5 py-3 border '>Length</p>
                        <p className='flex-1 px-5 py-3 border'>3995 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3995 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3995 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Width</p>
                        <p className='flex-1 px-5 py-3 border'> 1790 mm </p>
                        <p className='flex-1 px-5 py-3 border'> 1790 mm </p>
                        <p className='flex-1 px-5 py-3 border'> 1790 mm </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Height</p>
                        <p className='flex-1 px-5 py-3 border'>
                          1685 (unladen) mm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1685 (unladen) mm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1685 (unladen) mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2500 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2500 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2500 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
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
                        <p className='flex-1 px-5 py-3 border'>K15 C</p>
                        <p className='flex-1 px-5 py-3 border'>K15 C</p>
                        <p className='flex-1 px-5 py-3 border'>K15 C</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Fuel Type</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Capacity</p>
                        <p className='flex-1 px-5 py-3 border'>1462 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1462 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1462 cc</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Max Power</p>
                        <p className='flex-1 px-5 py-3 border'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Emission Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel-Efficiency
                        </p>
                        <p className='flex-1 px-5 py-3 border'>25.51 km/kg</p>
                        <p className='flex-1 px-5 py-3 border'>25.51 km/kg</p>
                        <p className='flex-1 px-5 py-3 border'>25.51 km/kg</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
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
                        <p className='flex-1 px-5 py-3 border'>5 MT</p>
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
                          Mac Pherson Strut & Coil
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Mac Pherson Strut & Coil
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Mac Pherson Strut & Coil
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Torsion Beam with Coil Spring
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Torsion Beam with Coil Spring
                        </p>
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
                        <p className='flex-1 px-5 py-3 border'>215/60 R16##</p>
                        <p className='flex-1 px-5 py-3 border'>215/60 R16##</p>
                        <p className='flex-1 px-5 py-3 border'>215/60 R16##</p>
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
                        <p className='flex-1 px-5 py-3 border'>
                          Ventilated Disc
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Ventilated Disc
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Ventilated Disc
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
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
          <sup>*</sup>The speed alert system gives audible warning for alert of
          over-speed to driver. When vehicle speed exceeds about 80 km/h,
          primary level warning with two beeps will sound every minute. When the
          vehicle speed exceeds about 120 km/h, secondary level warning with
          continuous beeps will sound. If the vehicle speed is slowed down to
          about 118 km/h, primary warning will resume. If the vehicle is slowed
          down to about 78 km/h, speed alert warning will stop. This buzzer does
          not indicate any malfunction in vehicle.
        </p>
        <p>
          <sup>#</sup>As certified by Test Agency Under Rule 115 (G) of CMVR
          1989
        </p>
        <p>
          <sup>*</sup>Claim as on date-supported by JATO Dynamics Ltd.,
          Sedan-Claim valid for CNG in its own class
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

export default BrezzaCNG;
