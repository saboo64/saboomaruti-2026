import React, { Fragment } from 'react';
import HomePageTab from '../../screens/home/HomePageTab';
function Cars() {
  return (
    <>
      <div className='container px-5 mx-auto mt-5 lg:px-0 md:px-3 min-h-[600px]'>
        <div className='grid grid-cols-1 gap-2'>
          <div className='space-y-1 text-center'>
            <section className='h-auto bg-white'>
              <div className='max-w-4xl px-2 py-5 mx-auto sm:py-10 sm:px-6 lg:px-8 sm:text-center'>
                <p className='mt-1 text-3xl font-extrabold text-[#293e91] sm:text-4xl sm:tracking-tight lg:text-5xl'>
                  Discover Your Dream Car at <br />
                  <span className='text-blue-800'>Popular</span>{' '}
                  <span className='text-red-600'>RKS</span>
                </p>
                <p className='mx-auto mt-5 text-lg font-light tracking-wide text-gray-600 max-w-9xl'>
                  At Popular RKS, we're dedicated to providing you with the finest
                  vehicles that match your style and needs. Browse our
                  collection today and experience automotive excellence like
                  never before.
                </p>
              </div>
            </section>
          </div>
        </div>

        <VehicleProducts />
      </div>
    </>
  );
}

const VehicleProducts = () => {
  return (
    <>
      <HomePageTab />
    </>
  );
};

export default Cars;
