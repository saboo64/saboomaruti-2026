import React from "react";
import { Link } from "react-router-dom";


const CarDetails = ({
  name,
  brand,
  priceRange,
  specs,
  iconUrls,
  brochureLink,
  compareLink,
  cngLink,
  onBestOffersClick,
}) => {
  return (
    <div className="my-auto">
      <div className="flex flex-col items-center xl:mt-12 sm:flex-row sm:items-start">
        <p
          className="mb-2 text-3xl font-light text-blue-800 sm:mb-0 sm:mr-4"
          x-intersect="$el.classList.add('focus-in-expand')"
        >
          {brand} <span className="font-semibold">{name}</span>
        </p>
        {iconUrls.map((url, i) => (
          <img
            key={i}
            className={`mr-2 w-14 h-7 ${i === 0 ? "shadow-xl" : i === 2 ? "shadow-2xl" : ""}`}
            src={url}
            alt="1"
          />
        ))}
      </div>

      <p className="text-lg font-light text-blue-800">
        Ex-Showroom Price:
        <span className="ml-3 text-xl text-red-600">{priceRange}</span>
      </p>

      <div className="flex flex-wrap items-center mt-5 mb-2 text-blue-800">
        {specs.map(({ label, value,icon }, i) => (
          <div key={i} className="flex items-center space-x-3 mr-7 ">
         
                <img src={icon} alt={label} className="w-5 h-5" />
            <p className="text-sm">
              {label} <br />
              <span className="font-semibold">{value}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 md:mt-5 md:mb-1">
        {/* Uncomment if needed */}
        {/* <button
          className='px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm'
          onClick={onBestOffersClick}
        >
          Get Best Offers
        </button> */}

        <a
          href={brochureLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 block w-full px-4 py-2 text-sm text-center text-white bg-blue-800 border border-blue-800 rounded-full shadow-sm hover:bg-red-600 hover:border-none hover:text-white md:mb-0"
        >
          View Brochure
        </a>

        <Link
          to={compareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 block w-full px-4 py-2 text-sm text-center text-blue-800 bg-white border border-blue-800 rounded-full shadow-sm hover:bg-red-600 hover:border-none hover:text-white"
        >
          Compare
        </Link>

        <Link
          to={cngLink}
          className="flex-1 block w-full px-4 py-2 text-sm text-center text-blue-800 bg-white border border-blue-800 rounded-full shadow-sm hover:bg-green-600 hover:border-none hover:text-white"
        >
          Get CNG
        </Link>
      </div>

      <p className="w-full h-px my-6 bg-gray-300"></p>

      {/* <p className="flex items-center">
        <BsCalendarCheck className="mr-1" />
        Delivery from Saboo RKS, 7-30 days
      </p> */}

      <p
        className="mt-2 mb-5 text-xl text-blue-800"
        x-intersect="$el.classList.add('fade-in-left')"
      >
        Our professional and well-trained staff is ready to assist you
      </p>
    </div>
  );
};

export default CarDetails;
