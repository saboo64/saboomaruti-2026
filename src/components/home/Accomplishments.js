import React from "react";
import { Link } from "react-router-dom";

function Accomplishments() {
  return (
    <>
      <div className="px-5 space-y-2 mb-7">
        <p className="mt-2 text-2xl leading-8 tracking-wider text-center text-gray-900">
          <span className="text-indigo-600">Popular </span>
          <span className="py-10 font-semibold text-red-500">
            RKS Awards And Accomplishments
          </span>
        </p>
        <p className="text-center">
          Our longstanding reputation is sure to continue with strong growth in
          the future. Over the years we have received innumerable awards. we
          have achieved.
        </p>
      </div>
      <div className="container px-5 mx-auto space-y-3 bg-white">
        <div className="grid grid-cols-1 text-sm border rounded-lg shadow-lg md:grid-cols-2">
          <div className="bg-[#edf6f9]">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Royal-Platinum-Award-Saboo-RKS.webp"
              className="object-contain mx-auto product_image h-60"
              alt="Popular RKS Royal Platinum Award"
            />
          </div>
          <div className="p-5 space-y-3">
            <p className="text-xl font-semibold tracking-wide text-blue-900">
              Royal Platinum Band
            </p>
            <p className="text-gray-500">
              It gives us immense pleasure to inform you that Popular RKS has
              achieved the coveted "Royal Platinum Band" in BSC 2018-19
            </p>

            <p className="text-gray-500">
              We would like to extend our Heart Felt Thanks to our Customers for
              being part of the Popular RKS Family and contributing towards this
              Success. We wish to continue to serve you as ever.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 text-sm border rounded-lg shadow-lg md:grid-cols-2">
          <div className="p-5 space-y-3">
            <p className="text-xl font-semibold tracking-wide text-blue-900">
              Platinum Dealership Award
            </p>
            <p className="text-gray-500">
              Popular RKS has been awarded the ‘Platinum Dealership Award’ for its
              4th consecutive year from Maruti Suzuki.
            </p>
            <p className="text-gray-500">
              This prestigious award considers key parameters for recognition of
              sustained efforts in achieving excellent performance & visionary
              leadership, demonstrating 360 degree of dynamism in all aspects of
              business with focus on customer retention.
            </p>
          </div>

          <div className="bg-[#edf6f9]">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Platinum-Award.webp"
              className="object-contain mx-auto product_image h-60"
              alt="Popular RKS Royal Platinum Award"
            />
          </div>
        </div>
      </div>
      <div className="py-10 text-center">
        <Link to="/awards"
          className="p-2 px-6 py-2 text-sm text-center text-white duration-300 ease-in bg-blue-800 rounded hover:bg-rose-700 hover:border-red"
        >
          View More
        </Link>
      </div>
    </>
  );
}

export default Accomplishments;
