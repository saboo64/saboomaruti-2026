import React from 'react';
import Slider from '../../components/home/Slider';
import CarEnquiry from '../../components/home/CarEnquiry';
import MobileSlider from '../../components/home/MobileSlider';
import Cars from '../../components/home/Cars';
// import About from '../../components/home/About';
// import Accomplishments from '../../components/home/Accomplishments';
import { FaStar } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//confetti
// import Confetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper';
import { reviews } from '../../constants/carservice';
import Header from '../../components/header/Header';

// import { Helmet } from 'react-helmet';
import { WhyChooseUs } from '../../components/home/About';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';
import { SEOPages, organizationSchema } from '../../constants/SEOData';
// import DussehraFireworks from '../../components/DussehraFireworks';

export default function Home() {
  return (
    <>
      <SeoMeta {...SEOPages.Home} />
      <StructuredData data={organizationSchema} />
      {/* <DussehraFireworks /> */}
      <Header />
      {/* <Header2 /> */}
      <div className=' sm:hidden'>
        <MobileSlider />
      </div>
      <div className='hidden sm:block'>
        <Slider />
      </div>

      {/* <Slider /> */}
      {/* <Confetti /> */}
      {/* <MobileSlider /> */}

      <h1 className='px-5 pt-4 text-xl font-semibold text-center md:text-2xl lg:text-3xl'>
        Maruti Suzuki Cars in Hyderabad | Popular RKS
      </h1>

      <CarEnquiry />

      <Cars />
      {/* <About /> */}
      <WhyChooseUs />
      {/* <Accomplishments /> */}
      {/* <LocationsatHomePage /> */}
      <Blog />
      <Testimonials />
    </>
  );
}

const Blog = () => {
  return (
    <>
      <section className=''>
        <div className='max-w-screen-xl px-4 py-1 mx-auto lg:py-1 lg:px-2'>
          <div className='max-w-screen-sm mx-auto mb-2 text-center lg:mb-16 '>
            <h2
              className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91]'
              x-intersect="$el.classList.add('tracking-in-expand')"
            >
              Our Blog
            </h2>
            <p
              className='max-w-2xl mx-auto mb-12 text-lg font-light text-gray-600'
              x-intersect="$el.classList.add('fade-in-bottom')"
            >
              Rev Up Your Knowledge: Explore Our Blog for Expert Tips, Trends,
              and Latest news!
            </p>
          </div>
          <div className='grid gap-8 lg:grid-cols-3'>
            {/* <!-- article 1 --> */}
            <article className='relative overflow-hidden border border-gray-200 rounded-lg shadow-md'>
              <figure className='relative h-64 bg-gray-300'>
                <img
                  className='object-cover w-full h-full'
                  src='https://www.financialexpress.com/wp-content/uploads/2024/09/wagonr-waltz.jpg'
                  alt='Bonnie Green avatar'
                />
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <figcaption className='text-center text-white'>
                    <h2 className='text-3xl font-light'>
                      Maruti Suzuki WagonR Waltz Edition launched at Rs 5.64
                      lakh
                    </h2>
                    <p className='mt-2 text-sm'>Financial Express</p>
                  </figcaption>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='absolute w-6 h-6 text-yellow-100 top-2 left-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 3a2 2 0 0 0-2 2v3.586L5.707 9.293a1 1 0 1 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0-1.414-1.414L11 8.586V5a2 2 0 0 0-2-2z'
                      clipRule='evenodd'
                    />
                    <path
                      fillRule='evenodd'
                      d='M8 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V3zM7 9.586V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.414l-3.5 3.5a1 1 0 0 1-1.414 0L7 9.586z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </figure>
              <div className='p-6 bg-white '>
                <div>
                  <div className='flex items-center mb-4 text-gray-500'>
                    <span className='text-xs font-medium'>Article</span>
                    <span className='mx-2'>•</span>
                    <time className='text-xs'>Sep 20, 2024</time>
                  </div>
                  <p className='max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600 '>
                    Maruti Suzuki, celebrating the success of the WagonR, has
                    launched the limited edition Waltz variant, priced at Rs
                    5.64 lakh onwards, ex-showroom. Over the years, Maruti
                    Suzuki has sold over 32.5 lakh units of the WagonR since its
                    launch.
                  </p>
                </div>
                <div className='flex justify-center'>
                  <a
                    href='https://www.financialexpress.com/auto/car-news/maruti-suzuki-wagonr-waltz-edition-launched-at-rs-5-64-lakh/3616537/'
                    className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        ></path>
                      </svg>
                    </span>
                    <span className='absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease'>
                      Read More
                    </span>
                    <span className='relative invisible'>Read More</span>
                  </a>
                </div>
              </div>
            </article>
            {/* <article className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md">
              <div className="relative h-64 bg-gray-300">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.siasat.com/wp-content/uploads/2023/05/Before-87.png"
                  alt="Bonnie Green avatar"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-light">
                      Hyderabad: 20 cars distributed under Driver Empowerment
                      Programme
                    </h2>
                    <p className="mt-2 text-sm">The Siasat Daily</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-6 h-6 text-yellow-100 top-2 left-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3a2 2 0 0 0-2 2v3.586L5.707 9.293a1 1 0 1 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0-1.414-1.414L11 8.586V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V3zM7 9.586V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.414l-3.5 3.5a1 1 0 0 1-1.414 0L7 9.586z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 bg-white">
                <div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <span className="text-xs font-medium">Article</span>
                    <span className="mx-2">•</span>
                    <span className="text-xs">May 17, 2023</span>
                  </div>
                  <p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600">
                    As a part of the Driver Empowerment Programme, Telangana
                    State Minority Finance Corporation (TSMFC) distributed 20
                    Maruthi Suzuki cars to minority beneficiaries on Tuesday.
                  </p>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.siasat.com/hyderabad-20-distributed-under-driver-empowerment-programme-2591202/"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
              </div>
            </article> */}

            {/* <!-- article 2 --> */}
            <article className='relative overflow-hidden border border-gray-200 rounded-lg shadow-md'>
              <figure className='relative h-64 bg-gray-300'>
                <img
                  className='object-cover w-full h-full'
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/local/bye-bye-diesel.png'
                  alt='Bye Bye Diesel ! Nitin Gadkari urges Auto Inc to move away
                      from diesel vehicle production'
                />
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <figcaption className='text-center text-gray-200'>
                    <h2 className='text-3xl font-light'>
                      Bye Bye Diesel ! Nitin Gadkari urges Auto Inc to move away
                      from diesel vehicle production
                    </h2>
                    <p className='mt-2 text-sm'>ETAuto</p>
                  </figcaption>
                </div>
              </figure>
              <div className='flex flex-col justify-between p-6 bg-white'>
                <div>
                  <div className='flex items-center mb-4 text-gray-500'>
                    <span className='text-xs font-medium'>Article</span>
                    <span className='mx-2'>•</span>
                    <time className='text-xs'>Sep 12, 2023</time>
                  </div>
                  <p className='max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600'>
                    Union Minister of Road Transport and Highways, urged the
                    automobile industry to shift away from diesel sales and the
                    production of diesel vehicles, citing it as a hazardous
                    fuel.
                  </p>
                </div>

                <div className='flex justify-center '>
                  <a
                    href='https://auto.economictimes.indiatimes.com/news/industry/bye-bye-diesel-nitin-gadkari-urges-auto-inc-to-move-away-from-diesel-production-else-face-10-extra-gst/103599761'
                    className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        ></path>
                      </svg>
                    </span>
                    <span className='absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease'>
                      Read More
                    </span>
                    <span className='relative invisible'>Read More</span>
                  </a>
                </div>
              </div>
            </article>

            {/* <!-- article 3 --> */}
            <article className='relative overflow-hidden border border-gray-200 rounded-lg shadow-md'>
              <figure className='relative h-64 bg-gray-300'>
                <img
                  className='object-cover w-full h-full'
                  src='https://www.financialexpress.com/wp-content/uploads/2024/09/Maruti-Swift-CNG.jpg'
                  alt='The Hindu'
                />
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <figcaption className='text-center text-gray-100'>
                    <h2 className='text-3xl font-light'>
                      Maruti Suzuki Swift CNG launched at Rs 8.20 lakh: Price,
                      Mileage
                    </h2>
                    <p className='mt-2 text-sm'>Express Drives Desk</p>
                  </figcaption>
                </div>
              </figure>
              <div className='flex flex-col justify-between p-6 bg-white'>
                <div>
                  <div className='flex items-center mb-4 text-gray-500'>
                    <span className='text-xs font-medium'>Article</span>
                    <span className='mx-2'>•</span>
                    <time className='text-xs'>Sep 12, 2024</time>
                  </div>
                  <p className='max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600'>
                    Since its debut in May, the 2024 Maruti Suzuki Swift has
                    consistently ranked in the top three, except for August. To
                    maintain this momentum, the Indian automaker introduced the
                    Swift CNG,
                    {/* with prices starting at Rs 8.20 lakh,
                    ex-showroom. */}
                  </p>
                </div>

                <br />
                <div className='flex justify-center'>
                  <a
                    href='https://www.financialexpress.com/auto/car-news/maruti-suzuki-swift-cng-launched-at-rs-8-20-lakh-price-mileage/3609103/'
                    className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        ></path>
                      </svg>
                    </span>
                    <span className='absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease'>
                      Read More
                    </span>
                    <span className='relative invisible'>Read More</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: descRef, inView: descInView } = useInView({ triggerOnce: true });

  return (
    <section
      className='container py-20 mx-auto my-5 lg:py-10 lg:px-8 rounded-3xl'
      id='testimonials'
    >
      <p
        ref={titleRef}
        className={`text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91] transition-all duration-700 ease-in-out ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        Testimonials
      </p>

      <p
        ref={descRef}
        className={`mb-8 text-lg text-center font-extralight transition-all duration-700 ease-in-out delay-200 ${
          descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        Discover what others have to say
      </p>

      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className='mySwiper'
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='px-8'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
                className='mx-auto'
                alt='offers'
              />
              <p className='py-2 text-base font-semibold text-center text-blue-800'>
                {item.author}
              </p>
              <div className='flex items-center justify-center space-x-1'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-orange-400' />
                ))}
              </div>
              <p className='text-sm text-center'>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
