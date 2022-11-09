import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

const ScheduleEvent = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [link, setLink] = useState();
  const [color, setColor] = useState();

  console.log(description);
  console.log(link);
  console.log(color);

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [time, setTime] = useState("");
  // const [meet_channels, setMeet_channels] = useState("");
  // const [link, setLink] = useState("");
  // const [participant, setParticipant] = useState("");

  // const { user } = useAuthContext();
  // const token = user.token;
  // console.log("token",token)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const url = `${process.env.REACT_APP_API_BASE_URL}/api/schedule/`;
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title,
  //       description,
  //       time,
  //       meet_channels,
  //       link,
  //       participant,
  //     }),
  //   });
  //   const data = await response.json();
  //   e.target.reset();

  //   if (data) {
  //     console.log(data.message);
  //   } else {
  //     console.log(data.error);
  //   }
  // };

  return (
    <div>
      <div className="py-10 px-40 flex">
        <div className="grid grid-cols-3 gap-3 w-full">
          <div>
            <Link to="/eventType">
              <button className="text-base text-[#005FE6] bg-white px-6 py-3 rounded-full border-solid border border-[#005FE6] ">
                Back
              </button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-xl">Add Event</h1>
          </div>
          <div className="text-end">
            <h3 className="text-lg text-slate-600">Your event type is</h3>
          </div>
        </div>
      </div>

      <div className="">
        <div className="py-10 px-40">
          <div class="grid grid-cols-2 gap-4 py-3">
            <div>Invitee language - English</div>
            <div className="text-end">view live page</div>
          </div>

          <div className="border-2 border-solid border-[#666A73] w-full rounded">
            <div class="grid grid-cols-2 gap-4 py-3 pl-12 pr-6">
              <div>
                <span>{""}</span>
                <p>What event is this?</p>
                <p className="text-slate-600">
                  {title ? title : ""}.{" "}
                  {location ? location : "No location given"}{" "}
                </p>
              </div>
              <div className="text-end">
                <button className="mr-2">Cancel</button>
                <button className="text-base font-semibold text-white bg-blue-800 rounded-full hover:bg-blue-700 px-3 py-1 rounded-full ml-2">
                  Next
                </button>
              </div>
            </div>

            <hr />

            <form className="py-3 pl-12">
              <label class="block my-3">
                <span class="block text-sm font-medium text-black">
                  Event Name
                </span>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Event Name"
                  class="mt-1 block w-1/2 px-3 py-2 bg-white border border-[#B2B2B2] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label class="block my-3">
                <span class="block text-sm font-medium text-black">
                  Location
                </span>
                <select
                  class="mt-1 block w-1/2 px-3 py-2 bg-white border border-[#B2B2B2] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option className="text-slate-400" value="in person meeting">
                    Add a location
                  </option>
                  <option value="in person meeting">In-person Meeting</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Google Meet">Google Meet</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Microsoft Teams">Microsoft Teams</option>
                  <option value="Webex">Webex</option>
                  <option value="GoTo Meeting">GoTo Meeting</option>
                  <option value="Custom">Custom</option>
                  <option value="Ask Invitee">Ask Invitee</option>
                </select>
              </label>

              <label class="block my-3">
                <span class="block text-sm font-medium text-black">
                  Description/Instructions
                </span>
                <textarea
                  rows={10}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write a summary and any details your invitee should know about the event."
                  class="mt-1 block w-1/2 px-3 py-2 bg-white border border-[#B2B2B2] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label class="block my-3">
                <span class="block text-sm font-medium text-black">
                  Event Link
                </span>
                <span class="block text-sm text-slate-600">
                  calendly.com/profileName/
                </span>
                <input
                  type="text"
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Enter Event Link"
                  class="mt-1 block w-1/2 px-3 py-2 bg-white border border-[#B2B2B2] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label class="block my-3">
                <span class="block text-sm font-medium text-black">
                  Event Color
                </span>
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                ></input>
              </label>
            </form>

            <hr />
            <div class="grid grid-cols-2 gap-4 py-3 pl-12 pr-6">
              <div></div>
              <div className="text-end">
                <button className="mr-2">Cancel</button>
                <button className="text-base font-semibold text-white bg-blue-800 rounded-full hover:bg-blue-700 px-3 py-1 rounded-full ml-2">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvent;
