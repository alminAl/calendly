import React from "react";
import AboutData from "../components/AboutComponent/AboutData";
import OurMission from "../components/AboutComponent/OurMission";

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-blue-600 font-bold text-center mt-6 mb-6 leading-relaxed">
          Helping millions{" "}
          <span className="text-sky-900">
            schedule <br /> better
          </span>
        </h1>
      </div>
      <div className=" flex flex-col items-center">
        <p className=" w-9/12 mx-auto  text-3xl text-center tracking-wider antialiased leading-relaxed text-cyan-900">
          From small businesses to Fortune 100 companies,
          <br /> millions of people around the world rely on Calendly to
          <br /> close deals, land candidates, build relationships, and
          <br /> grow their business—faster.
        </p>
        <button className="bg-blue-500 text-white text-xl font-bold p-4 rounded-md m-9 w-52">
          Start for Free
        </button>
      </div>
      <AboutData></AboutData>
      <OurMission></OurMission>
    </div>
  );
};

export default About;
