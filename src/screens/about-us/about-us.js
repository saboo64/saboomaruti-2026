"use client";
import React from "react";
import Header from "../../components/header/Header";
import ceoBg from "../../assets/ceo-bg.jpg";
const AboutSection = () => {
  return (<><Header />
    {/* <img
      src='../../assets/banners/Saboo-RKS-Maruti-Suzuki-Now_6-Airbags.webp'
      alt='About Saboo Maruti'
      className='container w-full mx-auto mb-8'
      height={400}
    /> */}
    <section className="relative py-16 pt-20 bg-gray-100">

      <div className="max-w-5xl px-6 mx-auto">

        {/* Content */}
        <div className="space-y-5 text-sm leading-7 text-gray-700 md:text-base">

          <p>
            Popular Vehicles & Services Limited ("Popular Vehicles & Services" or
            "Company"), belongs to the diversified Kuttukaran Group, operating
            multi-brand automobile dealerships in Kerala, Tamil Nadu and
            Karnataka. We are among the top six dealerships in India, in terms of
            sales by volume, as of March 31, 2023, with respect to each of our
            passenger and commercial vehicles dealerships.
          </p>

          <p>
            Founded by the late Shri. K. P. Paul, the Group launched the Company
            in 1984 as one among the first batch of Dealers appointed by Maruti
            Suzuki in India. Over the years, the operations were scaled up across
            Kerala and Chennai.
          </p>

          <p>
            Popular Vehicles now operates the Fifth (Fiscal 2023) largest selling
            Maruti Suzuki dealership in India under the Arena network (by volume)
            and the Eighth (Fiscal 2023) largest selling Maruti Suzuki dealership
            in India under the Nexa network (by volume), as of March 31, 2023.
          </p>

          <p>
            Popular Vehicles & Services Limited (Popular) has achieved the "Royal
            Platinum Band" by Maruti Suzuki for Arena Dealerships in Kerala,
            "Gold Band" for Arena Dealerships in Chennai and "Alpha Band" for
            Nexa Dealerships in financial year 2022 - 2023.
          </p>

          <p>
            A Customer Relationship Center caters to customer’s needs and queries
            round the clock. The Company also actively connects with its
            Customers through social media channels.
          </p>

          <p>
            The Kuttukaran Group has over 70 years of experience in the automobile
            industry. Our leadership team and promoters bring decades of
            experience, helping us become valued partners of our OEMs and giving
            us a strong competitive advantage.
          </p>

          <p>
            The core philosophy of the Company is “Passionately Enriching
            Mobility”.
          </p>

          {/* Vision */}
          <div className="pt-6">
            <h3 className="mb-2 text-xl font-semibold text-black">
              Our Vision
            </h3>

            <p>
              Kuttukaran will be the World’s most admired Corporate, by
              progressively delivering greater value, through entrepreneurship
              within.
            </p>
          </div>

        </div>
      </div>

      {/* Quote Section */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto mt-12">

        <div className="relative px-6 py-12 overflow-hidden text-center text-white ">

          {/* Background Image */}
          <div
            className="absolute bg-center bg-cover inset-7"
            style={{
              backgroundImage: `url(${ceoBg})`
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-lg italic">
              "In business, like in game of cards, you should take risks.
              But you must calculate the odds."
            </p>

            {/* Author */}
            <div className="flex justify-center ">
              <div className="p-4 mt-10 bg-white rounded shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  K P Paul
                </h4>
                <p className="text-gray-600">
                  Founder, Kuttukaran
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section></>
  );
};

export default AboutSection;