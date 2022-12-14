import React from "react";

const Calendly = () => {
  return (
    <section className="px-2 py-22 bg-white md:px-0 mb-12">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h4 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block lg:inline text-gray-900">
                  Share your{" "}
                  <span className="block text-indigo-600 xl:inline">
                    CALENDLY
                  </span>{" "}
                  availability with others
                </span>
              </h4>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Grow your business with scheduling automation. Simply email,
                text, or add your Calendly availability to your website – and
                watch prospects and recruits book high-value meetings with you.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#_"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Get Calendly Services
                  <svg
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/7mkknkKmPsEGwaB5mdt60t/33d742a897f87e8f6f5e11df85659960/Calendly-Email-Embed.png?w=1140&h=930&q=50&fm=webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendly;
