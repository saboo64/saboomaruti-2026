import React from 'react';
// import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { blogsData } from '../../constants/blogsData';
import SeoMeta from '../../components/SEo/SeoMeta';

function Blog() {
  return (
    <>
      <SeoMeta
        title='Blog |Popular RKS Pvt Ltd'
        description='' // You can update this if needed
        keywords='Blogs'
        canonicalUrl='https://www.saboomaruti.in/blog'
        ogImage='/img/og-tags/about_us.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      <img
        src={require('../../assets/banners/arena-blog-popup-banner.cd48ae712a6e99c6065c.webp')}
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
