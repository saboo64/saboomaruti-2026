import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import RewardSlider from '../../components/home/RewardSlider/RewardSlider';
// import { Helmet } from 'react-helmet';

import 'swiper/css';
import 'swiper/css/navigation';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { toast } from 'react-toastify';
import { VehicleCarEnquiry } from '../Forms/VehicleCarEnquiry';
import Logo1 from '../../assets/icons/reward-points/webp/1.webp';
import Logo2 from '../../assets/icons/reward-points/webp/2.webp';
import Logo3 from '../../assets/icons/reward-points/webp/3.webp';
import Logo4 from '../../assets/icons/reward-points/webp/4.webp';
import Logo5 from '../../assets/icons/reward-points/webp/5.webp';
import Logo6 from '../../assets/icons/reward-points/webp/6.webp';
import SeoMeta from '../../components/SEo/SeoMeta';

const cardData = [
  {
    id: 1,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/1.png',
    description: 'Referal bonus',
  },
  {
    id: 2,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/2.png',
    description: 'Loyalty bonus',
  },
  {
    id: 3,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/3.png',
    description: 'No Tier Downgrade',
  },
  {
    id: 4,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/4.png',
    description: 'Automatic Points Awarding',
  },
];

const RewardPoints = () => {
  return (
    <>
  <SeoMeta
  title="Maruti Suzuki Rewards | Loyalty Reward Program by Popular RKS"
  description="Earn and redeem points for exciting prizes from Popular RKS. A Digitised Experience. Super convenient meets super streamlined. Attend Exclusive Events with Maruti Suzuki Rewards."
  canonicalUrl="https://www.saboomaruti.in/maruti-alto-800-on-road-price-in-hyderabad"
  ogImage="/img/og-tags/default.webp"
  twitterUrl="https://www.saboomaruti.in/maruti-alto-800-on-road-price-in-hyderabad"
/>

      <Header />
      <RewardSlider />
      {/* Render MobileRewardSlider if window width is less than or equal to 425, otherwise render RewardSlider */}
      {/* {windowWidth <= 425 ? <MobileRewardSlider /> : <RewardSlider />} */}
      <MainLayout />
    </>
  );
};

const MainLayout = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <>
      <div className='p-8 text-center text-white bg-blue-800 md:p-20'>
        <div
          className='py-4 text-2xl uppercase md:text-5xl font-extralight md:py-10'
          x-intersect="$el.classList.add('tracking-in-expand')"
        >
          Discover the benefits of <br />{' '}
          <span className='font-bold'>Maruti Suzuki</span> Rewards
        </div>
        <div className='font-extralight'>
          Earn points for every action and transaction, and redeem them for
          savings on services, accessories, warranties, and exclusive offers.
        </div>
        {/* buttons */}
        <div className='flex flex-col items-center justify-center mt-4 md:flex-row md:mt-10'>
          <Transition show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black/25' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex items-center justify-center min-h-full p-4 text-center'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-100 shadow-xl rounded-3xl'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-medium leading-6 text-center text-blue-900'
                      >
                        Get info about Maruti Reward Points
                      </Dialog.Title>
                      <div className='mt-10 mb-10'>
                        <label className='block text-sm font-light text-gray-700'>
                          Phone<span className='text-red-600 sub'>*</span>
                        </label>
                        <input
                          className='block w-full h-10 px-2 mt-1 border-gray-600 rounded-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:text-sm'
                          type='text'
                          maxLength='10'
                          minLength='10'
                          required
                          id='Phone'
                          name='Phone'
                          value={phone}
                          onChange={(e) => {
                            // Remove non-numeric characters from the input value
                            const cleanedValue = e.target.value.replace(
                              /\D/g,
                              ''
                            );
                            // Ensure only 10 digits are allowed
                            const formattedValue = cleanedValue.substring(
                              0,
                              10
                            );
                            // Update the phone state with the formatted value
                            setPhone(formattedValue);
                          }}
                        />
                        {phone.length > 0 && phone.length < 10 ? (
                          <small className='text-red-500'>
                            Phone number must be 10 digits
                          </small>
                        ) : !pattern.test(phone) && phone.length === 10 ? (
                          <small className='text-red-500'>
                            Phone number is invalid
                          </small>
                        ) : (
                          ''
                        )}
                      </div>

                      <div className='mt-4'>
                        <button
                          type='button'
                          className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <a
            href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/msrebrochure.pdf'
            class='relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-medium text-white border border-white rounded-full hover:text-blue-800 group hover:bg-white mt-4 md:mt-0'
          >
            <span class='absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span class='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <svg
                class='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span class='relative'>Download Brochure</span>
          </a>
        </div>

        <div className='mt-4 text-black bg-white border-white md:mt-10 rounded-3xl md:w-4/4 md:mx-auto'>
          <div className='p-4 md:p-6'>
            <RewardTabs />
          </div>
          <VehicleCarEnquiry />
        </div>
      </div>
    </>
  );
};

// Dummy components for each tab
const ProgramOverview = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        {/* Section A */}
        <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo1}
              alt='..'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Earn Points on Transaction
            </div>
            <div className='text-sm text-left text-gray-500'>
              Win points on every transaction you make (max 5 points on every
              100 rupees spent) where 1 point = 1 rupee.
            </div>
          </div>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo2}
              alt='LOGO'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Win Badges on interactions
            </div>
            <div className='text-sm text-left text-gray-500'>
              Perform select actions to win badges that also carry points.
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo3}
              alt='LOGO'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Card-less Program
            </div>
            <div className='text-sm text-left text-gray-500'>
              Your membership is directly linked to your mobile number, which
              removes the hassle of carrying cards.
            </div>
          </div>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo4}
              alt='1'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Multiple Tiers
            </div>
            <div className='text-sm text-left text-gray-500'>
              Climb up to higher tiers and get exciting benefits like exclusive
              invites, more reward points on spends (max. 5 points on every 100
              rupees spent) and a lot more.
            </div>
          </div>
        </div>

        {/* Section C */}
        <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo5}
              alt='1'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Attend Exclusive Events
            </div>
            <div className='text-sm text-left text-gray-500'>
              Get opportunities for passes and exclusive invites to attend the
              most exclusive and exciting events
            </div>
          </div>
          <div className='flex flex-col justify-between p-4 bg-white rounded-lg shadow-md'>
            <img
              src={Logo6}
              alt='6'
              className='w-16 h-16 mx-auto mb-4'
              x-intersect="$el.classList.add('fade-in-left')"
            />
            <div
              className='text-xl font-semibold text-center text-blue-800'
              x-intersect="$el.classList.add('fade-in-left')"
            >
              Redeem Points
            </div>
            <div className='text-sm text-left text-gray-500'>
              Use your points to save on Service costs, Accessories and much
              more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TierBenefits = () => {
  return (
    <>
      <div className='relative w-full '>
        <div className='flex h-48 p-2 overflow-x-auto scrollbar-hide'>
          {cardData.map((card) => (
            <div
              key={card.id}
              className='flex flex-col items-center justify-center p-4 mx-2 mb-2 transition-transform duration-300 border rounded-md shadow-md w-38 sm:w-72 h-38 hover:scale-110 '
            >
              <img
                src={card.title}
                alt={card.description}
                className='h-12 mb-2 w-15'
              />
              <h2 className='mb-2 text-xl font-light text-blue-900 '>
                {card.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const EarnPoints = ({ tabNames }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isTabClicked, setIsTabClicked] = useState(false);

  useEffect(() => {
    // Reset isTabClicked to false after initial render
    setIsTabClicked(true);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render
  const images = [
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/1.webp',
      name: 'through vehicle service',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-1.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-1.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/5.webp',
      name: 'through extended warranty',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-2.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-2.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/3.webp',
      name: 'through car accessories',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-3.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-3.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/2.webp',
      name: 'through MCP',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-4.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-4.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/6.webp',
      name: 'through badges',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-5.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-5.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/earn-points-webp/4.webp',
      name: 'through Insurance',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-transparent/icon-6.svg',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/earn-points/earn-points-icons/icon-color/icon-c-6.svg',
    },
    // Add more image URLs and names as needed
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
    setIsTabClicked(true); // Set tab clicked state to true when any tab is clicked
  };

  // useEffect(() => {
  //   // Ensure that isTabClicked is false on component mount to display transparent icons by default
  //   setIsTabClicked(false);
  // }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex-grow'>
        <img
          src={images[selectedTab].url}
          alt={images[selectedTab].name}
          className='w-full h-5/6 rounded-2xl'
        />
      </div>
      <div className='p-4'>
        <div className='flex flex-col justify-center md:flex-row md:justify-start md:space-x-2'>
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex flex-col items-center uppercase py-2 px-4 text-gray-600 text-xs shadow border ${
                selectedTab === index
                  ? 'bg-blue-900 text-white'
                  : 'border bg-gray-200/50 text-gray-700 hover:font-bold'
              } rounded-md mb-2 md:mb-0`}
              onClick={() => handleTabClick(index)}
              style={{ width: '200px', height: '100px' }}
            >
              <img
                src={
                  selectedTab === index
                    ? image.icon
                    : isTabClicked
                    ? image.iconTransparent
                    : image.icon
                } // Render colored icon if active tab or if any tab is clicked, otherwise render transparent icon
                alt={`Icon ${index + 1}`}
                className='mb-1 w-14 h-14'
              />
              {image.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const RedeemPoints = ({ tabNames }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isTabClicked, setIsTabClicked] = useState(false);

  useEffect(() => {
    // Reset isTabClicked to false after initial render
    setIsTabClicked(true);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const images = [
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/6.webp',
      name: 'on vehicle service',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-1.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-1.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/1.webp',
      name: 'on a new car',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-2.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-2.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/4.webp',
      name: 'on extended warranty',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-3.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-3.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/5.webp',
      name: 'on MCP',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-4.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-4.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/2.webp',
      name: 'on car accessories',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-5.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-5.svg',
    },
    {
      url: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/maruti-rewards/redeem-points-webp/3.webp',
      name: 'on Insurance',
      iconTransparent:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icon-coloured/icon-c-6.svg',
      icon: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/redeem-points-tab/icons/icons-plain/icon-p-6.svg',
    },
    // Add more image URLs and names as needed
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
    setIsTabClicked(true); // Set tab clicked state to true when any tab is clicked
  };

  return (
    <div className='flex flex-col'>
      <div className='flex-grow'>
        <img
          src={images[selectedTab].url}
          alt={images[selectedTab].name}
          className='w-full h-5/6 rounded-2xl'
        />
      </div>
      <div className='p-4'>
        <div className='flex flex-col justify-center md:flex-row md:justify-start md:space-x-2'>
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex flex-col items-center uppercase py-2 px-4 text-gray-600 text-xs shadow border ${
                selectedTab === index
                  ? 'bg-blue-900 text-white'
                  : 'border bg-gray-200/50 text-gray-700 hover:font-bold'
              } rounded-md mb-2 md:mb-0`}
              onClick={() => handleTabClick(index)}
              style={{ width: '200px', height: '100px' }}
            >
              <img
                src={
                  selectedTab === index
                    ? image.icon
                    : isTabClicked
                    ? image.iconTransparent
                    : image.icon
                } // Render colored icon if active tab or if any tab is clicked, otherwise render transparent icon
                alt={`Icon ${index + 1}`}
                className='mb-1 w-14 h-14'
              />

              {image.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const RewardTabs = () => {
  const [activeTab, setActiveTab] = useState('program');

  // Mapping between tab names and corresponding components
  const tabComponents = {
    program: ProgramOverview,
    'tier benefits': TierBenefits,
    'earn points': EarnPoints,
    'redeem points': RedeemPoints,
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='text-lg font-medium text-center text-gray-500 uppercase border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul className='flex flex-wrap -mb-px'>
            {Object.keys(tabComponents).map((tabName) => (
              <li key={tabName} className='mb-2 me-2 md:mb-0'>
                <div
                  className={`inline-block p-3 md:p-4 border-b-2 border-transparent rounded-t-lg ${
                    activeTab === tabName
                      ? 'text-blue-600 border-blue-600'
                      : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName.replace(/^\w/, (c) => c.toUpperCase())}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Render tab content based on activeTab */}
      <div className='max-w-6xl p-2 mx-auto mt-4'>
        {activeTab && (
          <div className='p-4 rounded-lg '>
            {React.createElement(tabComponents[activeTab])}
          </div>
        )}
      </div>
    </>
  );
};

export default RewardPoints;
