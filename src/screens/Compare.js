import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { products } from '../constants/index';
import { Link } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import Header from '../components/header/Header';
import { addToCompare } from '../redux/compareSlice';
import { useSelector } from 'react-redux';

function Compare() {
  const dispatch = useDispatch();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleCompare = (item) => {
    dispatch(addToCompare(item));
  };
  return (
    <>
      <Header />
      <div
        className='container px-4 mx-auto my-15 md:px-3 mt-28 drop-shadow-xl'
        id='compare'
      >
        <p className='text-3xl text-center text-blue-800 '>Compare Cars</p>
        <p className='mb-8 text-center text-red-600'>
          {' '}
          Please select atleast two cars
        </p>
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className='mySwiper'
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden '>
                <div className='flex-auto overflow-hidden '>
                  <Link to={item.explore}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
                    />
                  </Link>
                </div>
                <div className='flex-auto bg-white'>
                  <div>
                    <div className='flex items-center justify-between p-5'>
                      <img src={item.logo} alt={item.name} className='h-5' />
                      <div>
                        <p className='flex items-center font-bold'>
                          <BiRupee />
                          {item.price}*
                        </p>{' '}
                        <p className='font-light'>ex-showroom</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-center pb-5 space-x-3'>
                      <Link
                        to={item.explore}
                        className='bg-blue-800 rounded-full hover:bg-rose-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center'
                      >
                        Explore
                      </Link>
                      <button
                        className='border rounded-full border-blue-800  p-2 max-w-[44%] w-full text-blue-800 text-center text-sm uppercase'
                        onClick={() => handleCompare(item)}
                      >
                        compare
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className='absolute z-10 p-3 bg-blue-300 rounded-full cursor-pointer left-3 top-1/2'
          >
            <GrFormPrevious />
          </div>
          <div
            ref={navigationNextRef}
            className='absolute z-10 p-3 bg-blue-300 rounded-full cursor-pointer right-3 top-1/2'
          >
            <GrFormNext />
          </div>
        </Swiper>
      </div>
      <TableLayout />
    </>
  );
}

const TableLayout = () => {
  const compare = useSelector((state) => state.compare);
  return (
    <>
      <div className='relative p-10 mt-10 overflow-x-auto sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 border border-collapse rounded-lg border-slate-200 drop-shadow-xl'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                vehicle / feature
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Mileage (km/l)
              </th>
              <th scope='col' className='px-6 py-3'>
                Power (kW@rpm)
              </th>
              <th scope='col' className='px-6 py-3'>
                ENGINE
              </th>
              <th scope='col' className='px-6 py-3'>
                Transmission
              </th>
              <th scope='col' className='px-6 py-3'>
                Seating
              </th>
              <th scope='col' className='px-6 py-3'>
                fuel type
              </th>
            </tr>
            {compare.compareItems?.map((item) => (
              <>
                <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium whitespace-nowrap dark:text-white'
                  >
                    {item.name}
                  </th>
                  <td className='px-6 py-4 text-white'>{item.price}</td>
                  <td className='px-6 py-4 text-white'>{item.mileage}</td>
                  <td className='px-6 py-4 text-white'>{item.power}</td>
                  <td className='px-6 py-4 text-white'>{item.engine}</td>
                  <td className='px-6 py-4 text-white'>{item.transmission}</td>
                  <td className='px-6 py-4 text-white'>{item.seating}</td>
                  <td className='px-6 py-4 text-white'>{item.fuel}</td>
                </tr>
              </>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default Compare;
