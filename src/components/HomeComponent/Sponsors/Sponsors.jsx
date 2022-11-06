import React from "react";

const Sponsors = () => {
  return (
    <div className="pb-16" style={{ fontFamily: "'Lato', sans-serif" }}>
      <div className="container mx-auto pt-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
          <h1
            tabIndex="0"
            className="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
          >
            Simplified scheduling for more than <br />{" "}
            <span className="text-indigo-600">10,000,000</span> users worldwide
          </h1>
          <p
            tabIndex="0"
            className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
          >
            Learn how Calendly customers save time and drive revenue
          </p>
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
            <img
              tabIndex="0"
              className="focus:outline-none px-20"
              src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg"
              alt="A"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
            <img
              tabIndex="0"
              className="focus:outline-none px-20"
              src="https://images.ctfassets.net/k0lk9kiuza3o/6NiS4DQmcqEUxKkXJVesAP/d356b290fa1f13a2addae7870312fef2/Vector.svg"
              alt="B"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 pt-4 items-center">
            <img
              tabIndex="0"
              className="focus:outline-none px-20"
              src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg"
              alt="C"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
            <img
              tabIndex="0"
              className="focus:outline-none px-20"
              src="https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/ca507ca425f99676147d856ce644c4ae/Company_logo.svg"
              alt="D"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
