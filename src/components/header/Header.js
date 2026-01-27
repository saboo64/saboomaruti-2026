import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
// import {
//   BsFacebook,
//   BsTwitter,
//   BsYoutube,
//   BsPinterest,
//   BsInstagram,
// } from 'react-icons/bs';
// import { ImLinkedin } from 'react-icons/im';
import MobileHeader from "./MobileHeader";
import MainHeader from "./MainHeader";
// import TestHeader from "./TestHeader";
// import MobileMenuHeader from "./MobileMenuHeader";
// import Confetti from 'react-confetti';
// import ProgressBar from 'react-scroll-progress-bar'; //Add this line
// import { Button } from '@mui/material';

function Header() {
  return (
    <>
      <TopHeader />
      {/* <MobileMenuHeader /> */}
      {/* <TestHeader /> */}
      <MobileHeader />
      <MainHeader />
      {/* <ProgressBar bgcolor='#0047AB' /> */}
    </>
  );
}

const TopHeader = () => {
  return (
    // <div className="container block py-2 mx-auto space-y-3 md:px-5 sm:flex Justify-between">
    //   <div className="items-center space-x-3 lg:flex ">
    //     <div className="flex items-center p-2 space-x-5">
    //       <div className="flex items-center space-x-1">Contact Us &nbsp;
    //         <a href="mailto:info@saboomaruti.in">
    //           <FaEnvelope />
    //         </a>
    //       </div>
    //       <div className="flex items-center justify-center space-x-1 sm:justify-start">
    //         <a href="tel:9848898488">
    //            <FaPhoneAlt size={12} />
    //         </a>
    //       </div>
    //       <div className="hidden h-5 space-y-4 text-black border lg:flex"></div>

    //     </div>
    //     <div className="flex items-center justify-center space-x-2">
    //       <Link
    //         to="/maruti-suzuki-car-offers-page"
    //         className="uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm"
    //       >
    //         Offers
    //       </Link>
    //       <Link
    //         to="/maruti-car-service-centers-near-me"
    //         className="uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm"
    //       >
    //         book a Service
    //       </Link>
    //     </div>
    //   </div>
    //   {/* <div className="flex items-center justify-center space-x-4">
    //     <a
    //       href="https://www.facebook.com/saboorksmaruti"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsFacebook />
    //     </a>
    //     <a
    //       href="https://twitter.com/saboorksmaruti"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsTwitter />
    //     </a>
    //     <a
    //       href="https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsYoutube />
    //     </a>
    //     <a
    //       href="https://www.linkedin.com/company/saboo-rks-motor-pvt-ltd/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <ImLinkedin />
    //     </a>
    //     <a
    //       href="https://in.pinterest.com/rksmaruti/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsPinterest />
    //     </a>
    //     <a
    //       href="https://www.instagram.com/saboorksmaruti/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsInstagram />
    //     </a>
    //   </div> */}
    // </div>
    <div className="container py-1.5 mx-auto block space-y-3 sm:flex items-center justify-between md:space-y-0 mb-2 md:mb-0 ">
      <div className="flex items-center justify-center space-x-4">
        <Link
          to="/maruti-suzuki-car-offers-page"
          className="px-5 py-2 text-sm text-white uppercase bg-blue-800 rounded-full shadow-sm hover:border-red-700 hover:bg-red-700 hover:text-white md:hidden"
          x-intersect="$el.classList.add('bounce-in-left')"
        >
          Offers
        </Link>
        <Link
          to="/maruti-car-service-centers-near-me"
          className="px-4 py-2 text-sm text-white uppercase bg-blue-800 rounded-full lg-px-8"
          x-intersect="$el.classList.add('bounce-in-left')"
        >
          Service your car
        </Link>
        {/* </div> */}
      </div>

      <div className="flex items-center justify-center space-x-5 ">
        <div className="flex items-center space-x-1 font-normal text-[#293e91]">
          <span x-intersect="$el.classList.add('focus-in-expand')">
            Contact Us &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <a
            href="https://wa.me/+919848898488"
            x-intersect="$el.classList.add('bounce-in-top')"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
        &nbsp;&nbsp;
        <div className="border text-[#293e91] h-5 lg:flex space-y-4"></div>
        <div className="flex items-center space-x-1 justify-center sm:justify-start text-[#293e91]">
          <a
            href="tel:9848898488"
            x-intersect="$el.classList.add('bounce-in-top')"
          >
            <FaPhoneAlt size={12} />
          </a>
        </div>
        &nbsp;&nbsp;
        <div className="border text-[#293e91] h-5 lg:flex space-y-4"></div>
        <div className="flex items-center space-x-1 justify-center sm:justify-start text-[#293e91]">
          <a
            href="mailto:info@saboomaruti.in"
            x-intersect="$el.classList.add('bounce-in-top')"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
