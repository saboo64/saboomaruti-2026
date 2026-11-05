import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { mobileOffersSliders, offersSliders } from '../../constants';
import { defaultOffers } from '../../constants/defaultOffers';
import { imagekitUrl } from '../../lib/imagekit';
import { Link } from 'react-router-dom';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Header from '../../components/header/Header';
import SeoMeta from '../../components/SEo/SeoMeta';
import { SEOPages } from '../../constants/SEOData';

const formatValidTill = (day) =>
  new Date(`${day}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const toSlides = (banners, key) =>
  banners.map((banner) => ({
    img: banner[key],
    alt: banner.alt,
    link: banner.link,
  }));

const BannerImage = ({ slide, className }) => {
  const image = <img src={slide.img} alt={slide.alt} className={className} />;
  if (!slide.link) return image;
  return slide.link.startsWith('/') ? (
    <Link to={slide.link}>{image}</Link>
  ) : (
    <a href={slide.link}>{image}</a>
  );
};

function Offers() {
  const [status, setStatus] = useState('loading');
  const [offers, setOffers] = useState([]);
  const [desktopSlides, setDesktopSlides] = useState([]);
  const [mobileSlides, setMobileSlides] = useState([]);

  useEffect(() => {
    let active = true;
    fetch('/api/offers')
      .then((response) => {
        if (!response.ok) throw new Error(`status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        // null means nothing has been set up in the dashboard yet.
        setOffers(data.offers || defaultOffers);
        setDesktopSlides(
          data.banners ? toSlides(data.banners, 'desktopImage') : offersSliders
        );
        setMobileSlides(
          data.banners ? toSlides(data.banners, 'mobileImage') : mobileOffersSliders
        );
        setStatus('ready');
      })
      .catch((err) => {
        // Old prices are never shown as a fallback, as they could be out of date.
        console.error('Could not load offers:', err);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <SeoMeta {...SEOPages.offers} />

      <Header />
      {desktopSlides.length > 0 && <DesktopSlider slides={desktopSlides} />}
      {mobileSlides.length > 0 && <MobileSlider slides={mobileSlides} />}
      {desktopSlides.length === 0 && <div className='lg:mt-20 mt-14' />}

      {status === 'loading' && (
        <p className='py-20 text-center text-gray-500'>Loading offers…</p>
      )}

      {(status === 'error' || (status === 'ready' && offers.length === 0)) && (
        <div className='px-5 py-16 text-center'>
          <p className='mb-3 text-xl font-semibold text-blue-900'>
            {status === 'error'
              ? 'We couldn’t load today’s offers.'
              : 'New offers are coming soon.'}
          </p>
          <p className='mb-5 text-gray-600'>
            Contact us for the latest offers on your Maruti Suzuki.
          </p>
          <Link
            to='/contact-maruti-suzuki-showroom'
            className='px-5 py-2 font-bold text-white uppercase bg-blue-900 rounded-full hover:bg-red-700'
          >
            Contact us
          </Link>
        </div>
      )}

      {status === 'ready' && offers.length > 0 && (
        <>
          <div className='my-10 space-y-2 text-center'>
            <p className='text-2xl font-semibold text-blue-900'>
              Hurry and take advantage of these exciting offers, available for a
              limited time.
            </p>
          </div>

          <div className='container grid gap-4 px-5 pb-5 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>
            {offers.map((item) => (
              <div
                className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
                key={item.id || item.carName}
              >
                <p className='absolute shadow-xl top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28'>
                  Offer
                </p>

                <div>
                  <img
                    src={imagekitUrl(item.image, 'w-700,f-auto')}
                    alt={item.imageAlt || item.carName}
                    className='w-full mx-auto'
                  />
                </div>
                <div className='flex-auto bg-white'>
                  <div className='flex items-center justify-between p-5'>
                    <p className='text-xl font-bold'>
                      <i>{item.carName}</i>
                    </p>
                    <p className='flex flex-col font-bold text-right'>
                      <span className='text-sm font-light text-gray-600'>
                        Save up to <br />
                      </span>
                      <span className='text-xl text-red-500 uppercase'>
                        <span className='text-xs font-extralight'>₹</span>{' '}
                        {item.amount}*
                      </span>
                      {item.note && (
                        <span className='text-sm font-normal text-gray-600'>
                          {item.note}
                        </span>
                      )}
                      {item.endsAt && (
                        <span className='text-xs font-normal text-gray-500'>
                          Valid till {formatValidTill(item.endsAt)}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className='flex flex-col w-full px-5 mb-3'>
                    <Link
                      to={item.link}
                      className='py-2 font-bold text-center text-white uppercase bg-blue-900 rounded-full hover:animate-pulse hover:bg-red-700'
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

function DesktopSlider({ slides }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
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
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <BannerImage slide={slide} className='w-full desktop_slider' />
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
  );
}

function MobileSlider({ slides }) {
  return (
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
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <BannerImage slide={slide} className='w-full max-w-full lg:mt-16' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Offers;
