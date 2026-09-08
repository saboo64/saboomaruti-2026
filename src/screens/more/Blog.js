import React from 'react';
import blogBanner from '../../assets/banners/Website_Maruti_Suzuki_Arena_Monsoon_Offers_June_offers_Now_Six_6_Airbags_Popular_RKS_Vehicles_Services.webp';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { blogsData } from '../../constants/blogsData';
import SeoMeta from '../../components/SEo/SeoMeta';

function Blog() {
  return (
    <>
      <SeoMeta
        title='Blog |Popular RKS '
        description='' // You can update this if needed
        keywords='Blogs'
        canonicalUrl='https://www.saboomaruti.in/blog'
        ogImage='/img/og-tags/default.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      <img
        src={blogBanner}
        className='w-full lg:mt-16'
        alt='blog-screen-banner'
      />
      <p className='text-3xl text-center text-red-600'>
        News and Social Media Articles
      </p>
      <p className='mt-2 mb-1 text-center animate-pulse'>
        Stay connected and always be in the know with the most recent updates
        and exciting happenings from your beloved Maruti Suzuki Dealer!
      </p>
      <div className='container grid grid-cols-1 gap-4 p-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-0'>
        {blogsData.map((blog) => (
          <div
            className='relative flex flex-col overflow-hidden bg-white border rounded-lg shadow-md max-h-max '
            key={blog.id}
          >
            <img src={blog.img} alt={blog.id} />
            <div className='p-5'>
              <p className='text-[#293e91] font-semibold uppercase'>
                {blog.title}
              </p>
              <a
                href={blog.href}
                target='_blank'
                rel='noreferrer'
                className='text-sm font-semibold'
              >
                {blog.subTitle}
              </a>
              <p className='my-3 mb-10 text-sm text-gray-600'>{blog.desc}</p>
              <div className='absolute mb-4 bottom-3 right-8'>
                <a
                  href={blog.href}
                  rel='noreferrer noopener'
                  target='_blank'
                  className='pb-1 text-red-500 border-b-2 border-red-500'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
