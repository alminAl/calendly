import React from "react";
import Sales from "../../../assets/images/sales.webp";
import Recruiting from "../../../assets/images/Recruiting.webp";
import Customer_Succes from "../../../assets/images/Customer_Success.webp";
import Education from "../../../assets/images/Education.webp";

const Solution = () => {
  return (
    <div>
      <h6 className="mt-5 text-center text-4xl tracking-tight leading-10 font-small sm:text-4xl sm:leading-none md:text-4xl">
        <span className="text-indigo-600 font-bold">
          The right Calendly for the work you do
        </span>{" "}
      </h6>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Sales} alt="Sales" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sales</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Recruiting} alt="Recruiting" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Recruiting</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Customer_Succes} alt="Customer_Succes" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Customer Succes</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Education} alt="Education" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Education</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
