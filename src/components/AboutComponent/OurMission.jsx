import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ourmission.css";

const OurMission = () => {
  const [useDiv1, SetDiv1] = useState(true);
  const [useDiv2, SetDiv2] = useState(true);
  const [useDiv3, SetDiv3] = useState(true);
  const [useDiv4, SetDiv4] = useState(true);
  return (
    <div>
      <div className="flex justify-center items-center m-auto">
        <section className="earthSection w-7/12">
          <div className="earth"></div>
          <div className="circleErth">
            <h1 className="leading-loose tracking-widest text-6xl">Calendly</h1>
          </div>
        </section>
        <div className=" ml-14 w-7/12 p-4">
          <h1 className="text-5xl font-semibold text-blue-600 mb-5">
            Our Mission
          </h1>
          <p className="leading-loose tracking-wider">
            What started as a simple, time-saving scheduling link has grown into
            an omni-channel scheduling platform for teams and businesses around
            the world. Our belief is that a scheduling automation platform
            should provide broad and deep support for various meeting scenarios
            — especially for teams that schedule meetings with external parties
            at scale.
          </p>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <h1 className="text-5xl text-sky-900 font-bold text-center mt-6 mb-6 leading-relaxed">
          Our <span className="text-blue-600">commitment</span> to our <br />
          customers
        </h1>
        <p className="text-2xl leading-relaxed tracking-wider pt-8 pb-8 indent-3">
          Calendly is committed to delivering a robust and intuitive scheduling
          platform that helps our customers close deals, land candidates, build
          relationships, and grow their business—faster.
        </p>
      </div>
      <div className="w-8/12 mx-auto">
        <h1 className="text-5xl text-sky-900 font-bold text-center mt-6 mb-6 leading-relaxed">
          Our <span className="text-blue-600">Story</span>
        </h1>
        <p className="text-2xl leading-relaxed tracking-wider pt-8 pb-8 indent-12">
          Calendly is so much more than a scheduling platform, we're a team of
          customer-obsessed, mission-oriented people who believe anything is
          possible.
        </p>
      </div>
      <div className="flex w-4/6 mx-auto mb-5">
        <div className="">
          <h1 className="text-4xl text-sky-900 font-bold text-center mt-6 mb-6 leading-relaxed">
            Meet our leadership team
          </h1>
          <p className="font-xl leading-loose tracking-widest">
            Tope Awotona founded Calendly in 2013 through sheer grit,
            perseverance, and the complete and utter emptying of his personal
            savings accounts. With everything on the line, he turned his vision
            of simple scheduling for everyone into a vibrant, growing platform
            that manages scheduling for more than 10 million individuals and
            businesses.
          </p>
        </div>
        <div className="">
          <img
            className=" h-full"
            src="https://images.ctfassets.net/k0lk9kiuza3o/4wLgVf1T9xDB4arbWnLDwt/c9f83e02ece3a50d91b14f857c6e579e/Calendly-Leadership.png?w=1140&h=930&q=50&fm=webp"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="flex w-4/6 mx-auto mt-14">
        <div className="">
          <img
            className=" h-full w-11/12"
            src="https://images.ctfassets.net/k0lk9kiuza3o/6fW2xA0zr3N3VMxHGVJBev/df957fc23b4457e98b285a72e532b2eb/Group_28572.png?w=1087&h=893&q=50&fm=webp"
            alt=""
            srcset=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl text-sky-900 font-bold text-center mt-6 mb-6 leading-relaxed">
            Calendly in the news
          </h1>
          <p className="font-6xl leading-loose tracking-widest">
            Get the latest Calendly news. Plus, a media kit and tools for
            journalists.
          </p>
        </div>
      </div>
      <div className="w-7/12 mx-auto mt-10">
        <h1 className="text-sm text-center text-blue-600">THE TIME ECONOMY</h1>
        <h2 className="text-5xl  tracking-wide leading-normal font-semibold text-center -indent-10">
          A scheduling automation platform built for the Time Economy
        </h2>
      </div>
      <div className="text-center mb-10 mt-10">
        <Link to="#div1" className="pr-3" onClick={() => SetDiv1(!useDiv1)}>
          Core Scheduling Platform
        </Link>
        <Link to="#div2" className="pr-3" onClick={() => SetDiv2(!useDiv2)}>
          The Time Economy
        </Link>
        <Link to="#div3" className="pr-3" onClick={() => SetDiv3(!useDiv3)}>
          Industry Solution
        </Link>
        <Link to="#div4" className="pr-3" onClick={() => SetDiv4(!useDiv4)}>
          Calendly for Enterprise
        </Link>
      </div>
      {
        <div className={useDiv1 ? "hidden" : "visible"} id="div1">
          <h1>This div one</h1>
        </div>
      }
      {
        <div className={useDiv2 ? "hidden" : "visible"} id="div2">
          <h1>This div Two</h1>
        </div>
      }
      {
        <div className={useDiv3 ? "hidden" : "visible"} id="div3">
          <h1>This div Three</h1>
        </div>
      }
      {
        <div className={useDiv4 ? "hidden" : "visible"} id="div4">
          <h1>This div Four</h1>
        </div>
      }
    </div>
  );
};

export default OurMission;
