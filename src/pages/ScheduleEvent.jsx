import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const ScheduleEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [meet_channels, setMeet_channels] = useState("");
  const [link, setLink] = useState("");
  const [participant, setParticipant] = useState("");

  const { user } = useAuthContext();
  const token = user.token;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/schedule/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        time,
        meet_channels,
        link,
        participant,
      }),
    });
    const data = await response.json();
    e.target.reset();

    if (data) {
      console.log(data.message);
    } else {
      console.log(data.error);
    }
  };

  return (
    <div>
      <div className="pt-28">
        <h1 className="text-center text-2xl font-bold underline decoration-indigo-500 uppercase decoration-2 decoration-double">
          schedule a event
        </h1>
        <div className="flex w-full justify-center items-center mt-5 mb-20">
          <div className="card shadow-xl rounded-lg">
            <div className="card-body p-3">
              <form onSubmit={handleSubmit}>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Event Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Event Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                    required
                  />
                </div>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Event Description</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter Event Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                    required
                  />
                </div>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Event Time</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Event Time"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                    required
                  />
                </div>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Channel Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Channel Type"
                    onChange={(e) => setMeet_channels(e.target.value)}
                    value={meet_channels}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                  />
                </div>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Event Link</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter Event Link"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                  />
                </div>
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Enter Event Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Event Email"
                    onChange={(e) => setParticipant(e.target.value)}
                    value={participant}
                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg"
                  />
                </div>

                <input
                  className="btn w-full cursor-pointer mt-5 border-2 text-white hover:text-[#106731] font-bold px-4 py-2 rounded-lg uppercase bg-[#106731] hover:border-[#106731] hover:bg-white duration-200"
                  // disabled={isLoading}
                  type="submit"
                  value="Add Course"
                />
                {/* {error && (
                                <div className='text-red-500'>{error}</div>
                            )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvent;
