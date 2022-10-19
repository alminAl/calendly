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
      <div className="text-center ml-20">
        {
          <div
            className={
              useDiv1
                ? "hidden"
                : "visible flex w-4/5 justify-center items-center mx-auto mb-10"
            }
            id="div1"
          >
            <div className="w-4/5">
              <h1 className="text-3xl font-bold leading-loose tracking-widest">
                Core Scheduling Platform
              </h1>
              <p className="text-xl leading-relaxed tracking-wider">
                Automatically book meetings from your website, host a webinar or
                class, or schedule calls with clients— while controlling your
                availability and saving everyone time.
              </p>
              <Link className="text-blue-600 ">
                Lear How you can schedule better with Calendly
              </Link>
            </div>
            <div>
              <img
                className="w-4/5"
                src="https://images.ctfassets.net/k0lk9kiuza3o/3LtFq03z9gsGFAE6qlsBWC/92895d4b496ad39650176d6b515c2e66/One-Click-Scheduling.png?w=1162&h=930&q=50&fm=webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
        }
        {
          <div
            className={
              useDiv2
                ? "hidden"
                : "visible flex w-4/5 justify-center items-center mx-auto mb-10"
            }
            id="div2"
          >
            <div className="w-4/5">
              <h1 className="text-3xl font-bold leading-loose tracking-widest">
                The Time Economy
              </h1>
              <p className="text-xl leading-relaxed tracking-wider">
                Our most precious resource is time — and the next decade will be
                defined by how we manage it. Calendly surveyed 1,000 knowledge
                workers to learn more about how they value and use their time
              </p>
              <Link className="text-blue-600">Read The Report</Link>
            </div>
            <div>
              <img
                className="w-4/5"
                src="https://images.ctfassets.net/k0lk9kiuza3o/6Dw764zKInZ67WJNj3jnNy/7dd4e8924162b4787def4d6b4ea38622/Calendly-time-economy.png?w=1140&h=930&q=50&fm=webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
        }
        {
          <div
            className={
              useDiv3
                ? "hidden"
                : "visible  flex w-4/5 justify-center items-center mx-auto mb-10"
            }
            id="div3"
          >
            <div className="w-4/5">
              <h1 className="text-3xl font-bold leading-loose tracking-widest">
                Industry Solutions
              </h1>
              <p className="text-xl leading-relaxed tracking-wider">
                Whether you lead a Sales, Marketing, Recruiting, Customer
                Success, Education or other team, we have solutions that meet
                your department needs.
              </p>
              <Link className="text-blue-600">
                {" "}
                Learn more about Calendly industry Solution
              </Link>
            </div>
            <div>
              <img
                className="w-4/5"
                src="https://images.ctfassets.net/k0lk9kiuza3o/7KV1x6LkDfC2MZyAq5iRNa/ae3a80986ce68ab82780fe7463e83490/Calendly-Our-values__2_.png?w=1140&h=930&q=50&fm=webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
        }
        {
          <div
            className={
              useDiv4
                ? "hidden"
                : "visible  flex w-4/5 justify-center items-center mx-auto mb-10"
            }
            id="div4"
          >
            <div className="w-4/5">
              <h1 className="text-3xl font-bold leading-loose tracking-widest">
                Calendly for Enterprise
              </h1>
              <p className="text-xl leading-relaxed tracking-wider">
                Hundreds of coworkers use Calendly. Standardize in one secure,
                centrally- managed account where you have more control and they
                can work more efficiently.
              </p>
              <Link className="text-blue-600">
                Learn why teams love Calandly for enterprise
              </Link>
            </div>
            <div>
              <img
                className="w-4/5"
                src="https://images.ctfassets.net/k0lk9kiuza3o/pBJfCTBRIEplLvChkwsvg/463003e92bce04f187a6bebec4dc7030/Frame_28798.png?w=1334&h=920&q=50&fm=webp"
                alt=""
                srcset=""
              />
            </div>
          </div>
        }
      </div>
      <div className="bg-gray-200">
        <div className="mt-12 flex mx-auto w-4/5 justify-evenly items-center ">
          <div>
            <h1 className="text-6xl font-bold">Integrations and Extensions</h1>
            <h1 className="text-xl font-semibold mt-5 tracking-widest leading-loose">
              Boost productivity with integrations that fold right into your
              workflow.
            </h1>
            <button className="bg-blue-600 p-5 rounded text-white font-bold mt-4">
              Explore integrations
            </button>
          </div>
          <div>
            <img
              className="imgin"
              src="https://images.ctfassets.net/k0lk9kiuza3o/7pnp3ZIJHHNMJEYXSCktL/b04ce26084a30501984a14a2058efa36/Integrations-Calendly__1_.png?w=1582&h=1283&q=50&fm=webp"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
