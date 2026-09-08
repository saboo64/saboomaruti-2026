import React, { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import TourErtiga from '../../assets/banners/Tour-M.png';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';

function TourM() {
  const [price, setPrice] = useState('₹ 9,80,000');

  return (
    <>
      <SeoMeta
        title='Maruti Ertiga Tour M Commercial Sankranti Offers 2026 – Starting at ₹9.80 Lakh | Best Price at Popular RKS Hyderabad'
        description='Celebrate Sankranti 2026 with exclusive Popular RKS festive offers on the Maruti Suzuki Ertiga Tour M Commercial. On-road price starts at ₹9.80 Lakh in Hyderabad. Best deals for commercial use, low EMI options & quick delivery. Limited-time Sankranti offers – Book today!'
        keywords='Maruti Ertiga Tour M Sankranti offers 2026, Ertiga Tour M commercial Sankranti discounts Hyderabad, Popular RKS Ertiga Tour M offers, Popular RKS Sankranti deals Ertiga Tour M, Buy Ertiga Tour M Commercial Hyderabad, Maruti Ertiga Tour M best price Sankranti 2026, Ertiga Tour M on road price Hyderabad, Maruti Ertiga Tour M commercial vehicle Popular RKS'
        canonicalUrl='https://www.saboomaruti.in/tour/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
        ogImage='/img/og-tags/default.webp'
      />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/ertiga_M_Web-Banner.jpg'
        className='w-full max-w-full lg:mt-16'
        alt='1'
        id='overview'
      />

      <div className='container flex flex-wrap items-center justify-between p-5 mx-auto lg:px-0'>
        <img
          className='flex flex-wrap items-center'
          src={TourErtiga}
          alt='vehicle_banner'
        />
        <div>
          <div className='flex items-center p-5 space-x-5'>
            <div>
              <p>Petrol</p>
              <p>
                20.30 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                26.11 &nbsp; <span className='text-red-600'>km/kg*</span>
              </p>
            </div>
          </div>
          <p className='text-xs'>
            *As certified by Test Agency Under Rule 115 (G) of CMVR 1989
          </p>
        </div>
        <div className='p-5'>
          <p className='font-bold'>
            {price} <span className='text-red-600'>*</span>
          </p>
          <p>Select Car Variant</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            defaultValue=''
          >
            <option value='₹ 9,80,000*'>ERTIGA TOUR M PETROL</option>
            <option value='₹ 10,75,000*'>ERTIGA TOUR M (O) CNG</option>
          </select>
        </div>
      </div>
      <div className='container p-5 mx-auto'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/performance_txt.png'
              className='object-scale-down'
              alt='1'
            />
            <p className='p-2'>
              The S-CNG powered Tour M will offer maximum performance, enhanced
              safety and unmatched convenience. Equipped with Intelligent
              Injection System and dual interdependent ECUs, the MPV ensures
              consistent performance across all terrains. The Auto-Fuel Switch
              allows easy switching of fuel from petrol to CNG, thereby avoiding
              any jerks.
            </p>
            <br></br>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/safety-txt.png'
              className='object-scale-down p-5'
              alt='1'
            />
            <p className='p-2'>
              Maruti Suzuki Tour M is equipped with a host of safety features
              like Dual Airbags, ABS with EBD, Reverse Parking Sensors as
              standard, which ensure absolute safety for everyone
            </p>
            <ul className='p-2 list-disc'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/Tour-M_car1.png'
            className='w-full pt-10 md:w-auto'
            alt='1'
            id='enquiry'
          />
        </div>
      </div>

      <CarEnquiryDown title='TOUR-M' carName='TOUR-M' />
      <div className='container mx-auto' id='specs'>
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
                <p className='flex-1 px-5 py-3 text-center border'>PETROL</p>
                <p className='flex-1 px-5 py-3 text-center border'>CNG</p>
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
                          Projector Headlamp (Halogen)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          3D Tail Lamps with LED
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>FrontGrille</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Full Wheel Caps
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turn Signal Lamp Integrated in ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                          Driver Side Sun visor with Ticket Holder
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          2nd Row Seats 60:40 split with Recline
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          3rd Row Seats 540:50 Split with recline
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gear Shift Knob with Chrome Finish
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headrest Front Row Seats
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headrest 2nd Row Seats
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headrest 3rd Row seats
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Split Type Luggage Board
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Chrome Tipped Parking Brake Lever
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual Tone Interiors
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          2nd Row Armrest
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        CENTRAL CONSOLE AND INSTRUMENT PANEL
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
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          MID with Coloured TFT
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Digital Clock
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Consumption (Instantaneous and Avg)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Distance to Empty
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headlamp on Warning
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        <p className='flex-1 px-5 py-3 border '>Dual Airbag</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ABS with EBD and Brake Assist
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belts with Pre-tensioner & Force Limiters
                          (Dr.+ Co-Dr.)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder Lamp with Buzzer (Dr.+ Co-dr)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Speed Limit
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Speed Sensitive Auto Door Lock
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Security Alarm
                        </p>
                        <p className='flex-1 px-5 text-center border py-'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Locking
                        </p>
                        <p className='flex-1 px-5 text-center border py-'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Parking Sensors
                        </p>
                        <p className='flex-1 px-5 text-center border py-'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ISOFIX Child Sear Anchorages (2nd Row Seats)
                        </p>
                        <p className='flex-1 px-5 text-center border py-'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        INFOTAINMENT SYSTEM
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
                          Audio System with Electrostatic Touch Buttons
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Bluetooth Connectivity
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Speakers (4)</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          USB and AUX connectivity
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steering Mounted Audio Control
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steering Mounted Calling Control
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        <p className='flex-1 px-5 py-3 border '>Manual AC</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          2nd Row Adjustable AC
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Air Cooled Twin Cup Holder (Console)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Keyless Entry
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Accessory Socket Front Row with Smartphone Storage
                          Space
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Window (Fr/Rr) with Dr. side Auto Down Functions
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Day & Night IRVM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Tilt Steering
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrical Adjustable ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrical Foldable ORVM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Cabin Lamp (Fr.+Rr.)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Bottle Holders (in each row)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Passenger Side Sunvisor with Vanity Mirror
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                <p className='flex-1 px-5 py-3 text-center border'>PETROL</p>
                <p className='flex-1 px-5 py-3 text-center border'>CNG</p>
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
                          4395 mm
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          4395 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1735 mm
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1735 mm
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1690 mm
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1690 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          2740 mm
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          2740 mm
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          5.2 mm
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          5.2 mm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Boot Space</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          209 L (All 3 Rows UP), 550 L (3rd Row Folded) & 803 L
                          (2nd and 3rd Row Folded)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          {' '}
                          -{' '}
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
                        <p className='flex-1 px-5 py-3 border '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1730 kg
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1795 kg
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Kerb Weight</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1145 kg
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1235 kg
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
                        <p className='flex-1 px-5 py-3 border '>Displacement</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1462 cc
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          1462 cc
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Engine Type</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          K15B
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          K15B
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Compression Ratio
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          (10.5 <sup>+</sup>
                          <sub>-</sub> 0.3):1
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          (10.5 <sup>+</sup>
                          <sub>-</sub> 0.3):1
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Bore X Stroke
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          74.0 x 85.0
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          74.0 x 85.0
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power (Petrol Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          77KW @6000 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          77KW @6000 RPM
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Torque (Petrol Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          138 Nm @4400 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          138 Nm @4400 RPM
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Emission Type
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          BS6
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          BS6
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>-</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          68 kW @6000 rpm
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Torque (CNG Mode)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>-</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          122 kW @4400 rpm
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
                        SUSPENSION SYSTEM
                      </span>
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
                          MacPherson strut & Coil Spring
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          MacPherson strut & Coil Spring
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          MacPherson strut & Coil Spring
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          MacPherson strut & Coil Spring
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
                        <p className='flex-1 px-5 py-3 text-center border'>7</p>
                        <p className='flex-1 px-5 py-3 text-center border'>7</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          45 L
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          65 L (Water Equivalent)
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
                        Brakes/Tyre Size
                      </span>
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
                          Ventilated Disc
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          Ventilated Disc
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          (Leading & Trailing) Drum
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          (Leading & Trailing) Drum
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tyre Size</p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          185/65 R 15
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>
                          185/65 R 15
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

export default TourM;
