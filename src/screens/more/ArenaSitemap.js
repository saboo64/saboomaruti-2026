import React from 'react';
import pvslLogo from '../../assets/pvsl_logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SeoMeta from '../../components/SEo/SeoMeta';
import { SEOPages } from '../../constants/SEOData';

const ArenaSitemap = () => {
  return (
    <>
      <SeoMeta {...SEOPages.ArenaSitemap} />

      <nav className='py-2 bg-blue-800 md:py-4'>
        <div className='container px-2 mx-auto md:flex md:items-center'>
          <div className='flex items-center justify-between'>
            <a href='/' className='text-xl font-bold text-white-600'>
              {' '}
              <img
                className='w-auto h-12'
                src={pvslLogo}
                alt='Popular RKS Maruti Suzuki Logo'
              />
            </a>
            {/* <button
                className='px-3 py-1 text-gray-600 border border-gray-600 border-solid rounded opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i className='fas fa-bars'></i>
              </button> */}
          </div>

          <div
            className='flex-col hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0'
            id='navbar-collapse'
          >
            <a
              href='/'
              className='p-2 text-3xl font-bold text-white rounded lg:px-4 md:mx-2'
            >
              Sitemap
            </a>
          </div>
        </div>
      </nav>
      <div className='container mx-auto '>
        <div className='mt-6 text-6xl font-bold text-blue-800'>Sitemap</div>

        <div className='flex flex-wrap w-full mt-6 text-blue-800'>
          {/* Global */}
          <div className='mt-4 text-3xl font-semibold'>Global</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <a href='/' className=' hover:underline'>
                Home
              </a>
            </li>
            <li className='w-full md:w-1/4'>
              <a href='/maruti-suzuki-car-offers-page' className=' hover:underline'>
                Offers
              </a>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-car-service-centers-near-me'
                className=' hover:underline'
              >
                Book A Service
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-new-cars' className=' hover:underline'>
                Arena Cars
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-cng-cars' className=' hover:underline'>
                CNG Cars
              </HashLink>
            </li>
          </ul>{' '}
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-tour-cars' className='hover:underline'>
                Tour Cars
              </HashLink>
            </li>

            <li className='w-full md:w-1/4'>
              <HashLink to='/#testimonials' className=' hover:underline'>
                Testimonials
              </HashLink>
            </li>

            <li className='w-full md:w-1/4'>
              <HashLink
                to='/contact-maruti-suzuki-showroom'
                className=' hover:underline'
              >
                Contact Us
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink to='/blog' className=' hover:underline'>
                Blog
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink to='#outlets' className=' hover:underline'>
                Outlets
              </HashLink>
            </li>
          </ul>
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>
        {/* cars */}
        <div className='flex flex-wrap w-full text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>Cars</div>
          <ul className='flex flex-row justify-between w-full mt-4 text-2xl'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Alto 800
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Alto K10
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Wagon R
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Swift
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/the-all-new-celerio' className=' hover:underline'>
                Celerio
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#overview'
                className='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* specifications */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#specs'
                className='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#pricetable'
                className='hover:underline '
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
          </ul>
          {/* vehicle enquiry */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#enquiry'
                className='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
          </ul>
          {/* cng */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-cng-on-road-price-in-hyderabad'
                className='hover:underline '
              >
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/alto-k10-cng' className=' hover:underline'>
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagonr-cng-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/maruti-new-swift-cng' className=' hover:underline'>
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-celerio-cng-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
          </ul>
          {/* cars 2nd section */}
          <ul className='flex flex-row justify-between w-full mt-4 text-2xl'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Dzire
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                S-Presso
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Ertiga
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Brezza
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Eeco
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#overview'
                className='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* specifications */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#specs'
                className='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#pricetable'
                className='hover:underline '
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#pricetable'
                className=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
          </ul>
          {/* vehicle enquiry */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#enquiry'
                className='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <Link
                to='/maruti-eeco-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </Link>
            </li>
          </ul>
          {/* cng */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink to='/maruti-new-swift-cng' className='hover:underline '>
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-cng-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-cng-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-brezza-cng-on-road-price'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-cng-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
          </ul>
          {/* tour vehicles */}
          <ul className='flex flex-row justify-between w-full mt-4 text-2xl'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Tour H1
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Tour S
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Tour H3
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Tour M
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad'
                className=' hover:underline'
              >
                Tour V
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#overview'
                className='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#overview'
                className=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* enquiry */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#enquiry'
                className='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#enquiry'
                className=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul className='flex flex-row justify-between w-full mt-4 font-light'>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#specs'
                className='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#specs'
                className=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>

        <div className='flex flex-wrap w-full text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>About Us</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/about-maruti-suzuki-dealers#about'
                className=' hover:underline'
              >
                About Popular RKS
              </HashLink>
            </li>
            <li className='w-full md:w-2/2'>
              <HashLink
                to='/about-maruti-suzuki-dealers#team'
                className=' hover:underline'
              >
                Management
              </HashLink>
            </li>
          </ul>{' '}
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>

        <div className='flex flex-wrap w-full text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>Driving School</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-driving-school'
                className=' hover:underline'
              >
                Courses
              </HashLink>
            </li>
            <li className='w-full md:w-2/2'>
              <HashLink
                to='/maruti-suzuki-driving-school#dsenquiry'
                className=' hover:underline'
              >
                Driving School Enquiry
              </HashLink>
            </li>
          </ul>{' '}
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>

        <div className='flex flex-wrap w-full mt-6 text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>Services</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink to='/payment#payments' className=' hover:underline'>
                Payments
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-insurance-renewal#insurance'
                className=' hover:underline'
              >
                Insurance
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-finance-services#finance'
                className=' hover:underline'
              >
                Finance
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/corporate#corporate' className=' hover:underline'>
                Corporate
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/subscribe' className=' hover:underline'>
                Subscription
              </HashLink>
            </li>
          </ul>{' '}
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>

        <div className='flex flex-wrap w-full mt-6 text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>Outlets</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink to='/showrooms#showrooms' className=' hover:underline'>
                Arena
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/true-value' className=' hover:underline'>
                Truevalue
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-service-center#workshop'
                className=' hover:underline'
              >
                Workshop
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-driving-school-locations'
                className=' hover:underline'
              >
                Driving School
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink
                to='/maruti-driving-school-locations'
                className=' hover:underline'
              >
                Driving School
              </HashLink>
            </li>
          </ul>{' '}
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>

        <div className='flex flex-wrap w-full text-blue-800'>
          <div className='mt-4 text-3xl font-semibold'>More</div>
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <a
                href='https://www.spatial.io/s/Saboo-Arena-Showroom-62f498277e22f400016f8be8?share=2230171934612064401'
                className=' hover:underline'
              >
                Metaverse
              </a>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/compare-cars#compare' className=' hover:underline'>
                Compare
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink
                to='/maruti-genuine-accessories#accessories'
                className=' hover:underline'
              >
                Accessories
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/gallery#gallery' className=' hover:underline'>
                Gallery
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/blog#blog' className=' hover:underline'>
                Blog
              </HashLink>
            </li>
          </ul>{' '}
          <ul className='flex flex-row justify-between w-full mt-4 '>
            <li className='w-full md:w-1/4'>
              <HashLink to='/awards#awards' className='hover:underline'>
                Awards
              </HashLink>
            </li>
            <li className='w-full md:w-1/4'>
              <HashLink to='/careers#careers' className=' hover:underline'>
                Careers
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink to='/' className=' hover:underline'>
                Ertiga
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink to='/' className=' hover:underline'>
                Brezza
              </HashLink>
            </li>
            <li className='invisible w-full md:w-1/4'>
              <HashLink to='/' className=' hover:underline'>
                Eeco
              </HashLink>
            </li>
          </ul>
          <p className='w-full h-px my-6 bg-blue-800'></p>
        </div>
      </div>
    </>
  );
};

export default ArenaSitemap;
