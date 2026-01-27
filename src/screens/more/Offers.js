import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { mobileOffersSliders } from '../../constants';
import { offersSliders } from '../../constants';
import { Link } from 'react-router-dom';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';l
import SeoMeta from '../../components/SEo/SeoMeta';
// import swiftDzireImg from '../../assets/banners/vehicles/Swift-Tile-Image.webp';
import { SEOPages } from '../../constants/SEOData';

const offer_products = [
  {
    name: 'Swift ',
    price: '1,29,600',
    // desc:"on 2024 model (with old Alto & Wagonr exchange) ",
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
  },
  {
    name: 'Brezza ',
    price: '1,73,700',
    //desc: ' (with old Swift & Dzire exchange)',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-brezza.webp',
    // img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/offers/maruti-suzuki-brezza.webp",
    explore: '/maruti-new-brezza-on-road-price-in-hyderabad',
  },
  {
    name: 'Alto K10',

    price: '1,44,700',
    logo: 'Alto k10',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp',
    explore: '/maruti-alto-800-on-road-price-in-hyderabad',
  },
  {
    name: 'S-Presso',
    price: '1,66,700',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp',
    explore: '/maruti-s-presso-on-road-price-in-hyderabad',
  },
  {
    name: 'WagonR ',
    price: '1,66,700',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp',
    explore: '/maruti-wagon-r-on-road-price-in-hyderabad',
  },

  {
    name: 'Celerio',
    price: '1,31,200',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp',
    explore: '/the-all-new-celerio',
  },

  {
    name: 'EECO',
    price: '1,05,500',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp',
    explore: '/maruti-eeco-on-road-price-in-hyderabad',
  },
  {
    name: 'Ertiga',
    price: '51,400',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-ertiga.webp',
    explore: '/maruti-ertiga-on-road-price-in-hyderabad',
  },

    {
    name: 'Dzire',
    price: '90,200',
    img: 'https://www.marutisuzuki.com/images/dzire_brand/images/threesixty/blue/suzuki_swift_ext_360_oragne_v-1_6.webp',
    explore: '/maruti-swift-dzire-on-road-price-in-hyderabad',
  },
  // {
  //   name: 'Old Dzire',
  //   price: '38,000',
  //   img: swiftDzireImg,
  //   explore: '/maruti-swift-dzire-on-road-price-in-hyderabad',
  // },
];

function Offers() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <SeoMeta {...SEOPages.offers} />

      <Header />
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className='hidden mySwiper lg:mt-16 sm:block'
      >
        {offersSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt='offers'
              className='w-full desktop_slider'
            />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className='absolute z-10 p-3 bg-white rounded-full cursor-pointer left-10 top-1/2'
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className='absolute z-10 p-3 bg-white rounded-full cursor-pointer right-10 top-1/2'
        >
          <GrFormNext />
        </div>
      </Swiper>
      <MobileSlider />
      <div className='my-10 space-y-2 text-center'>
        <p className='text-2xl font-semibold text-blue-900'>
          Hurry and take advantage of these exciting offers available for a
          limited time until the end of {months[new Date().getMonth()]}-
          {new Date().getFullYear()}.
        </p>
        {/* <p className="container w-full mx-auto my-auto text-sm italic text-red-500 font-extralight">
          <span className="font-semibold">Disclaimer:</span> Exclusive offers on
          2023 models — avail the deal before stocks run out.
        </p>
        <p>
          Last Chance to buy, before price hike. Limited Period to avail
          exciting offers before prices go up
        </p> */}
        {/* <p className='text-xs'>
          <strong>Note:</strong> This Saboo RKS Maruti Suzuki offer is updated
          on 01-{months[new Date().getMonth()]}-{new Date().getFullYear()}. 
        </p> */}
      </div>

      <div className='container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>
        {offer_products.map((item) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={item.name}
          >
            <p className='absolute shadow-xl top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28'>
              Offer
            </p>

            <div className=''>
              <img src={item.img} alt={item.name} className='w-full mx-auto' />
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5'>
                  {/* <img src={item.logo} alt={item.name} /> */}
                  <p className='text-xl font-bold'>
                    <i>{item.name}</i>
                  </p>
                  <p className='flex flex-col font-bold text-right'>
                    <span className='text-sm font-light text-gray-600'>
                      Save up to <br />
                    </span>
                    <span className='text-xl text-red-500 uppercase'>
                      <span className='text-xs font-extralight'>₹</span>{' '}
                      {item.price}*
                    </span>
                    <span className='text-sm text-gray-600 '>{item.desc}</span>
                  </p>
                </div>
                <div className='flex flex-col w-full px-5 mb-3'>
                  <Link
                    to={item.explore}
                    className='py-2 font-bold text-center text-white uppercase bg-blue-900 rounded-full hover:animate-pulse hover:bg-red-700'
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='container px-5 pb-5 mx-auto mb-10 text-sm sm:px-0'>
        {/* <p>
          Note: These offers are valid on 2024 Models only. above offers
          including consumer, exchange, institutional, rural offers
        </p> */}
      </div>
    </>
  );
}

function MobileSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect='fade'
        modules={[Autoplay, Pagination, EffectFade]}
        className='mySwiper sm:hidden'
      >
        {mobileOffersSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              className='w-full max-w-full lg:mt-16'
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Offers;
