import React from "react";

const AboutData = () => {
  const datas = [
    { amout: 10, name: "User worldwide", sign: "m" },
    { amout: 50, name: "Companies use Calendly", sign: "K" },
    { amout: 155, name: "Countries withmonthly active users", sign: "+" },
    { amout: 100, name: "Partner integrations", sign: "+" },
  ];
  const Companyimages = [
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg",
    },
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg",
    },
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg",
    },
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/ca507ca425f99676147d856ce644c4ae/Company_logo.svg",
    },
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/e576716034690751c9781af8f41a5b3b/EBay_logo.svg",
    },
    {
      images:
        "https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        {datas.map((data) => {
          return (
            <div className="p-12 ">
              <h4 className="text-5xl font-bold text-center  text-blue-600">
                {data.amout}
                <span className="text-cyan-900 text-5xl leading-10 font-extrabold">
                  {data.sign}
                </span>
              </h4>
              <div className="text-gray-600 text-lg  w-18 leading-10 tracking-wider">
                {data.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-6/12 mx-auto p-10">
        <h1 className="text-center text-cyan-900 text-4xl font-bold leading-relaxed">
          Simplified scheduling for more than{" "}
          <span className="text-blue-600">200,000,000 </span> meetings
        </h1>
      </div>
      <div className="flex justify-center animate-pulse">
        {Companyimages.map((Companyimage) => (
          <img
            className="max-w-200 max-h-10 px-10 my-12"
            src={Companyimage.images}
            alt=""
            srcset=""
          />
        ))}
      </div>
    </div>
  );
};

export default AboutData;
