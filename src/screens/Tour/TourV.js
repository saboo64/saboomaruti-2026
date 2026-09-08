import React, { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import EecoLogo from '../../assets/banners/eeco-tour.png';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

// import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';

function TourV() {
  const [price, setPrice] = useState('4,96,200');

  return (
    <>
<SeoMeta
  title="Maruti Eeco Tour V Commercial Sankranti Offers 2026 – Starting at ₹4.96 Lakh | Best Price at Popular RKS Hyderabad"
  description="Celebrate Sankranti 2026 with exclusive Popular RKS festive offers on the Maruti Suzuki Eeco Tour V Commercial. On-road price starts at ₹4.96 Lakh in Hyderabad. Ideal for business and commercial use with low EMI options & quick delivery. Limited-time Sankranti deals – Book today!"
  keywords="Maruti Eeco Tour V Sankranti offers 2026, Eeco Tour V commercial Sankranti discounts Hyderabad, Popular RKS Eeco Tour V offers, Popular RKS Sankranti deals Eeco Tour V, Buy Eeco Tour V Commercial Hyderabad, Maruti Eeco Tour V best price Sankranti 2026, Eeco Tour V on road price Hyderabad, Maruti Eeco Tour V commercial vehicle Popular RKS"
  canonicalUrl="https://www.saboomaruti.in/tour/maruti-eeco-tour-v-on-road-price-in-hyderabad"
  ogImage="/img/og-tags/default.webp"
/>


      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco-banner_01.jpg'
        className='w-full max-w-full lg:mt-16'
        alt='1'
        id='overview'
      />

      <div className='container flex flex-wrap items-center justify-between p-5 mx-auto lg:px-0'>
        <img
          className='flex flex-wrap items-center object-left'
          src={EecoLogo}
          alt='vehicle_banner'
        />
        <div>
          <div className='flex items-center p-5 space-x-5'>
            <div>
              <p>Petrol</p>
              <p>
                19.71 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                26.78 &nbsp; <span className='text-red-600'>km/kg*</span>
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
            <option value='5,60,000'>TOUR V 5 STR AC (O) 1.2L</option>
            <option value='5,24,000'>TOUR V 5 STR STD (O) 1.2L</option>
            <option value='5,53,000'>TOUR V 7 STR STD (O) 1.2L</option>
            <option value='6,50,000'>TOUR V 5 STR AC (O) CNG</option>
          </select>
        </div>
      </div>
      <div className='container p-5 mx-auto'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/performance_txt.png'
              className='object-scale-down'
              alt='1'
            />
            <p className='p-2'>
              When it comes to performance, the Tour V is an exciting surprise.
              It comes with a powerful 1196cc BS6* compliant engine that makes
              every journey a delightful experience. At the same time, its
              Engine Management System provides an astounding mileage.
            </p>
            <br></br>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/safety-txt.png'
              className='object-scale-down p-5'
              alt='1'
            />
            <p className='p-2'>
              Maruti Suzuki Tour V is designed to ensure a high level of safety
              for everyone. Packed with features like ABS, Driver Airbag and
              Reverse Parking Sensors, it guarantees peace of mind with every
              drive.
            </p>
            <ul className='p-2 list-disc'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco_Car.png'
            className='w-full pt-10 md:w-auto'
            alt='1'
          />
        </div>
      </div>

      <CarEnquiryDown title='TOUR-V' carName='TOUR-V' id='enquiry' />

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
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 5 SEATER AC
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 5 SEATER STD
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 7 SEATER STD
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  CNG 5 SEATER STD
                </p>
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
                          Center Cap from Central Cap
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Mud Flaps
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Badging (Tour V) Decal
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Outside Rear View Mirror (Left & Right)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                          Both Side Sunvisor
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Assist Grip (Co-Driver + Rear)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Molded Roof Lining
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Molded Floor Carpet
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Cabin Light
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Cabin Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        <p className='flex-1 px-5 py-3 border '>Heater</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reclining Front Seats
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Sliding Driver Seat
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Integrated Head Rest-Front Row
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        <p className='flex-1 px-5 py-3 border '>
                          HeadLamp Leveling
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Side Impact Beams
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belts for all Seats
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Mount Stop Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Speed Limit (80 km/h)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensor System
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Diver Airbag</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ABS with EBD</p>
                        <p className='flex-1 px-5 text-center border py-'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                        INSTRUMENT PANEL & CONSOLE
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
                          Speedometer Illumination Colour (Amber)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Multi Tripmeter
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Digital Meter cluster (Fuel Level, Odometer &
                          Tripmeter)
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          12 Volt Accessory Socket
                        </p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
                        <p className='flex-1 px-5 py-3 text-center border'>✔</p>
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
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 5 SEATER AC
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 5 SEATER STD
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  PETROL 7 SEATER STD
                </p>
                <p className='flex-1 px-5 py-3 text-center border'>
                  CNG 5 SEATER STD
                </p>
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
                        <p className='flex-1 px-5 py-3 border'>3675 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3675 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3675 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3675 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1475 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1475 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1475 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1475 mm</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1825 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1825 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1825 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1825 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2350 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2350 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2350 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2350 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Track Front (mm)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1280</p>
                        <p className='flex-1 px-5 py-3 border'>1280</p>
                        <p className='flex-1 px-5 py-3 border'>1280</p>
                        <p className='flex-1 px-5 py-3 border'>1280</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Track Rear (mm)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1290</p>
                        <p className='flex-1 px-5 py-3 border'>1290</p>
                        <p className='flex-1 px-5 py-3 border'>1290</p>
                        <p className='flex-1 px-5 py-3 border'>1290</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Minimum Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4.5 mm</p>
                        <p className='flex-1 px-5 py-3 border'>4.5 mm</p>
                        <p className='flex-1 px-5 py-3 border'>4.5 mm</p>
                        <p className='flex-1 px-5 py-3 border'>4.5 mm</p>
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
                        <p className='flex-1 px-5 py-3 border'>1510 kg</p>
                        <p className='flex-1 px-5 py-3 border'>1510 kg</p>
                        <p className='flex-1 px-5 py-3 border'>1510 kg</p>
                        <p className='flex-1 px-5 py-3 border'>1510 kg</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Kerb Weight</p>
                        <p className='flex-1 px-5 py-3 border'>940 kg</p>
                        <p className='flex-1 px-5 py-3 border'>940 kg</p>
                        <p className='flex-1 px-5 py-3 border'>940 kg</p>
                        <p className='flex-1 px-5 py-3 border'>940 kg</p>
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
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1196 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1196 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1196 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1196 cc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Engine Type</p>
                        <p className='flex-1 px-5 py-3 border'>G12B</p>
                        <p className='flex-1 px-5 py-3 border'>G12B</p>
                        <p className='flex-1 px-5 py-3 border'>G12B</p>
                        <p className='flex-1 px-5 py-3 border'>G12B</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          No. of Valves
                        </p>
                        <p className='flex-1 px-5 py-3 border'>16</p>
                        <p className='flex-1 px-5 py-3 border'>16</p>
                        <p className='flex-1 px-5 py-3 border'>16</p>
                        <p className='flex-1 px-5 py-3 border'>16</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Fuel Type</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Distribution
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Multi Point Injection
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Multi Point Injection
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Power
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          54kW @6000 rpm <br></br>46kW @ 6000rpm (CNG)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Transmission Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          5 Speed-MT (Rear Drive)
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @4200 rpm <br></br> 85Nm @3000rpm (CNG)
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
                        <p className='flex-1 px-5 py-3 border'>5 (AC)</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                        <p className='flex-1 px-5 py-3 border'>7</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border '>40 L</p>
                        <p className='flex-1 px-5 py-3 border'>40 L</p>
                        <p className='flex-1 px-5 py-3 border '>40 L</p>
                        <p className='flex-1 px-5 py-3 border'>40 L</p>
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
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tyre Size</p>
                        <p className='flex-1 px-5 py-3 border'>155R13 LT</p>
                        <p className='flex-1 px-5 py-3 border'>155R13 LT</p>
                        <p className='flex-1 px-5 py-3 border'>155R13 LT</p>
                        <p className='flex-1 px-5 py-3 border'>155R13 LT</p>
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

export default TourV;
