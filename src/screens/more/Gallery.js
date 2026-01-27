import React from 'react';
import { useState } from 'react';

import ReactPaginate from 'react-paginate';
import Header from '../../components/header/Header';
import galleryData from '../../constants/galleryData';
import { Link } from 'react-router-dom';
// Import Font Awesome CSS in your JavaScript file
import '@fortawesome/fontawesome-free/css/all.css';
import SeoMeta from '../../components/SEo/SeoMeta';

// const galleryData = [
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02877.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02883.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02905.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02911.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02912.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02920.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02923.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02929.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02951.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02953.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02955.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02958.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02983.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02985.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03116.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03346.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03351.webp',
//   },
// ];

function Gallery() {
  const data = galleryData;
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 12;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = data
    .slice(pageVisited, pageVisited + dataPerPage)
    .slice(0, 12)
    .map((item, i) => <img src={item.img} key={i} alt={item.img} />);

  const pageCount = Math.ceil(data.length / dataPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
  <SeoMeta
  title="Maruti Suzuki Showroom Images in Hyderabad | Maruti Suzuki Workshop Images"
  description="Saboo Arena authorized Maruti Suzuki Arena Dealer in Secunderabad & Hyderabad. View latest Showroom, Maruti new car & Workshop images of Saboo Maruti."
  keywords="Maruti Suzuki Nexa Showrrom"
  canonicalUrl="https://www.saboonexa.in/gallery"
  ogImage="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpg"
  twitterUrl="https://www.saboonexa.in/gallery"
/>

      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Maruti-Suzuki-Nexa-Gallery-Banner.png'
        className='w-full max-w-full'
        alt='Gallery banner'
      />
      <div className='px-4 shadow sm:px-0' id='gallery'>
        <p className='container py-4 mx-auto'>
          <Link to='/'>Home</Link> / Gallery
        </p>
      </div>
      <div className='container py-16 mx-auto'>
        <div className='grid grid-cols-2 gap-8 px-5 md:grid-cols-3 md:px-0'>
          {displayData}
        </div>
        <ReactPaginate
          previousLabel={<i className='fas fa-chevron-left'></i>}
          nextLabel={<i className='fas fa-chevron-right'></i>}
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={'flex justify-center mt-8'}
          previousLinkClassName={
            'px-3 py-1 rounded-full bg-blue-800 text-white mr-2 hover:bg-red-600'
          }
          nextLinkClassName={
            'px-3 py-1 rounded-full bg-blue-800 text-white ml-2 hover:bg-red-600'
          }
          breakClassName={
            'hidden md:block px-2 py-1 rounded-full bg-blue-800 text-white'
          }
          pageClassName={
            'hidden md:block px-2 py-1 rounded-full bg-blue-800 text-white mx-1'
          }
          activeClassName={'bg-red-500 text-white'}
          disabledClassName={'disabledPage'}
        />
      </div>
    </>
  );
}

export default Gallery;
