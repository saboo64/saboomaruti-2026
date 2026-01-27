import React from 'react';
// import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import CelerioCNG1 from '../../assets/banners/Speedy-Blue.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import CNGbanner from '../../assets/banners/Celerio CNG.webp';
import SeoMeta from '../../components/SEo/SeoMeta';
import { CNGvehicleSeo } from '../../constants/SEOData';

function CelerioCNG() {
  return (
    <>
      <SeoMeta {...CNGvehicleSeo.CelerioCNG} />
      <Header />
      <img src={CNGbanner} className='w-full max-w-full lg:mt-16' alt='1' />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>Celerio S-CNG</p>
            <p className='font-bold text-green-900'>
              6.73 lakh <sup>*</sup>
              <p className='font-light text-green-900'>ex-show room price</p>
            </p>

            <p className='text-s'>
              The All-New Celerio CNG now comes equipped with the revolutionary
              S-CNG Technology by Maruti Suzuki. The stylish hatchback is
              powered by a K10C CNG engine which makes 41.7 kW @5300 rpm of
              power and 82.1 Nm @ 3400 rpm of torque, ensuring a lively and
              invigorated drive. Available in the VXI MT variant, Celerio S-CNG
              has a fuel tank capacity of 60 litres (water equivalent) and
              offers incredible fuel efficiency of 35.60 km/kg.
            </p>
            <br></br>
            <p className='text-s'>
              Celerio S-CNG comes with a factory-fitted S-CNG kit which is
              integrated by experts into the mainframe of the car on the
              manufacturing floor itself. This CNG system has a special leak
              proof design so that there are no compromises on safety, while the
              use of advanced components helps enhance the engine’s longevity.
              The S-CNG technology also includes an Intelligent Injection System
              and interdependent ECUs that ensure stylishly smooth driving
              performance and enhanced fuel efficiency.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon1.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon2.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon3.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain object-right h-50 w-100 pt-14'>
            <img src={CelerioCNG1} alt='vehicle_banner' />
          </div>
        </div>
      </div>

      {/* insert form here */}

      {/* <CelerioCarEnquiry /> */}

      <CarEnquiryDown title='CELERIO CNG' carName='CELERIO CNG' />

      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>
              Celerio S-CNG features
            </p>

            <p className='font-bold text-green-900'>
              <div className='object-fill'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/Celerio_logo_CNG.jpg'
                  alt='celerio_logo'
                />
              </div>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
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
                <p className='flex-1 px-5 py-3 border'>VXI CNG (O)</p>
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
                        <p className='flex-1 px-5 py-3 border '>Chrome Grill</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body coloured Bumpers
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Full Wheel Covers
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Back Door Garnish
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Outside Door Handles
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured ORVMS
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
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
                          Co-Dr Vanity Mirror in Sunvisor
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Day night IRVM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Drink Holder - 5
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Seat (60:40 split)
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
                          Air Conditioner (Manual)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Outside Mirrors Type (Inside Manual)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Door Lock (5 Doors)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front & Rear Power Windows - Auto Down (Driver side)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Steering
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electric Windows (Power Windows)(Front+Rear)
                        </p>
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
                          Driver Airbag
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>ABS with EBD</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder (Driver and Passenger)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Speed Alert System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pedestrian Protection
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Child Proof Rear Door Locks
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Head Light Leveling
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Ventilated Disc
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Immobilizer</p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Passenger Airbag
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belts Pre-tensioner
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
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
                        CENTRAL CONSOLE & INSTRUMENT PANEL
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
                          Illumination Colour - Amber
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Urethane Steering Wheel
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Accessory Socket
                        </p>

                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>
                          Silver Painted Dial-type Climate Control
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                <p className='flex-1 px-5 py-3 border'>VXI CNG (O)</p>
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
                        <p className='flex-1 px-5 py-3 border'>3695 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3695 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1600 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1600 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1560 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1560 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2425 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2425 mm</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tread (Front)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1420 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1420 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tread (Rear)</p>
                        <p className='flex-1 px-5 py-3 border'>1410 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1410 mm</p>
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
                        <p className='flex-1 px-5 py-3 border '>Type</p>
                        <p className='flex-1 px-5 py-3 border'>K10B</p>
                        <p className='flex-1 px-5 py-3 border'>K10B</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Capacity</p>
                        <p className='flex-1 px-5 py-3 border'>998 CC</p>
                        <p className='flex-1 px-5 py-3 border'>998 CC</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          No. of Cylinders
                        </p>
                        <p className='flex-1 px-5 py-3 border'>3</p>
                        <p className='flex-1 px-5 py-3 border'>3</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max Power (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          43.5 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          43.5 kW @ 6000 rpm
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max Power (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          50 kW @6,000 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          50 kW @6,000 RPM
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max. Torque (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          78 Nm @ 3500 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          78 Nm @ 3500 RPM
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max. Torque (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          90 Nm @ 3000 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          90 Nm @ 3000 RPM
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Emission Standard Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>BS6 + OBD-1</p>
                        <p className='flex-1 px-5 py-3 border'>BS6 + OBD-1</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max. Torque (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @ 3000 RPM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98 Nm @ 3000 RPM
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          No of Valves in each Cylinder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Accelerator Pedal Type
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Electric type</p>
                        <p className='flex-1 px-5 py-3 border'>Electric type</p>
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
                        Suspension System
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

                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson strut with Coil Spring
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson strut with Coil Spring
                        </p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Coupled Torison Beam Axle with Coil Spring
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Coupled Torison Beam Axle with Coil Spring
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
                        Power Steering
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Type</p>
                        <p className='flex-1 px-5 py-3 border '>
                          Electronic Power Steering
                        </p>
                        <p className='flex-1 px-5 py-3 border '>
                          Electronic Power Steering
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
                        <p className='flex-1 px-5 py-3 border'>
                          Ventilated disc
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Ventilated disc
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
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
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Petrol: 35 L</p>
                        <p className='flex-1 px-5 py-3 border'>Petrol: 35 L</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>
                          Seating Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>60L</p>
                        <p className='flex-1 px-5 py-3 border'>60L</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>Tyre Size</p>
                        <p className='flex-1 px-5 py-3 border'>165/70R14</p>
                        <p className='flex-1 px-5 py-3 border'>165/70R14</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>Kerb Weight</p>
                        <p className='flex-1 px-5 py-3 border'>920 KG</p>
                        <p className='flex-1 px-5 py-3 border'>920 KG</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border'>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1350 KG</p>
                        <p className='flex-1 px-5 py-3 border'>1350 KG</p>
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
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
        <div className='px-6 my-auto space-y-3 text-left'>
          <p className='pt-5 text-4xl font-bold uppercase'>
            New Celerio s-CNG FAQ's
          </p>
        </div>
        <div className='object-contain object-right pt-8 h-50 w-100'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    1. IS THE CELERIO S-CNG A SAFE CAR
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Yes. The Celerio VXI MT S-CNG has a factory-fitted CNG kit
                    that is integrated into the car on the manufacturing floor
                    by experts. The entire CNG structure of the car boasts of a
                    leak-proof design, with stainless steel pipes and joints
                    which are corrosion-resistant as well. Apart from this, the
                    S-CNG technology also includes an integrated system wiring
                    harness to further improve the car's safety quotient by
                    eliminating chances of short circuits.
                  </p>
                  <br></br>
                  <p className='indent-8'>
                    To offer more assurance in terms of safety, the Maruti
                    Suzuki Celerio S-CNG has also been thoroughly evaluated and
                    tested for durability and crash worthiness with its CNG
                    structure in place.
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
                    2. WHAT DRIVING MODES ARE AVAILABLE IN THE NEW CELERIO
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className='pb-2 text-sm racking-normal'>
                  <p className='indent-8'>
                    You can drive your new Celerio S-CNG in one of three basic
                    fuel modes:-
                  </p>
                  <ul className='list-disc'>
                    <li>
                      <strong>Petrol Mode:</strong> the car starts and drives on
                      petrol
                    </li>
                    <li>
                      <strong>Auto Mode:</strong> The car starts on petrol and
                      automatically switches over to CNG later. This is the most
                      preferred mode and the one recommended by the company as
                      well for driving your new Celerio S-CNG.
                    </li>
                    <li>
                      <strong>Forced CNG mode:</strong> This mode allows for the
                      car to be started on CNG, which is not the optimum choice.
                      This is a mode that should only be used as a last resort
                      when there is absolutely no petrol in the car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    3. IF CELERIO'S CNG MALFUNCTION WARNING LIGHT TURNS ON WHILE
                    I'M DRIVING, WHAT SHOULD I DO?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    If your car’s CNG malfunction warning light is blinking or
                    continuously glowing when the engine is running, it means
                    that the CNG system may have an issue. Visit an authorised
                    Maruti Suzuki service centre immediately to have the problem
                    rectified.
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
                    4. CAN I GET THE TUNNING OF MY NEW CELERIO S-CNG DONE FROM
                    OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Getting the CNG kit of your new Celerio S-CNG tuned from an
                    unauthorised workshop is not advised. Unlike retrofitted CNG
                    kits, each component of the S-CNG system is integrated into
                    the car at the time of manufacture to ensure complete
                    safety. It takes the right tuning equipment and specialised
                    expertise to calibrate the kit properly, which you will only
                    be able to find at an authorised Maruti Suzuki service
                    centre.
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
                    5. What are the best features of the all new celerio s-cng?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    The All-New Celerio S-CNG comes with the following features:
                    -
                  </p>
                  <ul className='list-disc'>
                    <li>
                      <strong>Micro Switch:</strong> To make driving and
                      refuelling your new Celerio S-CNG safer, the car comes
                      equipped with a micro switch that turns the car off at the
                      time of refuelling and prevents it from turning on during
                      the process as well.
                    </li>
                    <li>
                      <strong>Auto-Switch:</strong> You no longer have to keep
                      your finger on the fuel switch, waiting to change from
                      petrol to CNG and back when the situation calls for it, as
                      Celerio S-CNG has a changeover switch that includes an
                      Auto Mode that does the switching for you.
                    </li>
                    <li>
                      <strong>NGV Receptacle:</strong> Celerio S-CNG comes with
                      an NGV receptacle, which is a special nozzle that allows
                      for safer and faster refuelling.
                    </li>
                    <li>
                      <strong>Fuel Level Indicator:</strong> There’s no longer
                      any need to guess when you need to refuel your car as the
                      Celerio S-CNG comes with a precision fuel level indicator
                      that lets you track the CNG levels in your car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default CelerioCNG;
