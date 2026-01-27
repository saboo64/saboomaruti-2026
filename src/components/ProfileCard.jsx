import React from "react";

import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from '../assets/pvsl_logo.png'
export default function ProfileCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full min-h-screen px-6 pt-10 pb-20 text-black bg-white">

        {/* Name */}
        <h1 className="text-3xl font-bold">Abdul Hameed</h1>
        <p className="mt-1 text-lg">GM-Marketing</p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-6 ">
          <a href="https://www.facebook.com/saboorksmaruti"><div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            <FaFacebookF className="text-lg text-white" />
          </div></a>
          <a href="https://www.instagram.com/saboorksmaruti"> <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            <FaInstagram className="text-lg text-white" />
          </div></a>
          <a href="https://in.linkedin.com/company/saboo-rks-motor-pvt-ltd"> <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            <FaLinkedinIn className="text-lg text-white" />
          </div></a>
          <a href="https://www.youtube.com/saboorksgroup"> <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            <FaYoutube className="text-lg text-white" />
          </div></a>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-xs mt-8 ">
          {/* Phone */}
          <a href="tel:+919848817111"> <button className="flex items-center justify-center w-full gap-3 py-3 text-white bg-black mt-text-lg rounded-2xl">
            <FaPhoneAlt /> Phone
          </button></a>

          {/* Email */}
          <a href="mailto:gm.marketing@saboomaruti.in"> <button className="flex items-center justify-center w-full gap-3 py-3 mt-5 text-lg text-white bg-black rounded-2xl">
            <FaEnvelope /> Email
          </button></a>

          {/* WhatsApp */}
          <a href="https://wa.me/+919848817111"> <button className="flex items-center justify-center w-full gap-3 py-3 mt-5 text-lg text-white bg-black rounded-2xl">
            <FaWhatsapp /> WhatsApp
          </button></a>
        </div>

        {/* Logo Section */}
        <div className="mt-10">
          <img
            src={logo}
            alt="Popular RKS"
            className="h-20 w-26 "
          />
        </div>

        {/* Locations */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold underline underline-offset-4">
            Our Locations
          </p>

          <p className="mt-3 text-lg leading-7">
            Somajiguda <span className="text-red-500">|</span> Malakpet <span className="text-red-500">|</span> Tadbund <br />
            Kushaiguda <span className="text-red-500">|</span> Kukatpally <span className="text-red-500">|</span> Uppal <br />
            Nampally <span className="text-red-500">|</span> Narsinai <span className="text-red-500">|</span> Shamirpet <br />
            Kodangal <span className="text-red-500">|</span> Nexa Lumbini
          </p>
        </div>
      </div></>
  );
}
