import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventType = () => {
  const [eventType, setEventtype] = useState();

  useEffect(() => {
    fetch("./EventType.json")
      .then((res) => res.json())
      .then((data) => setEventtype(data));
  }, []);
  //   console.log(eventType);

  return (
    <div>
      <div className="py-10 px-40 flex">
        <div>
          <Link to="/profile">
            <button className="text-base text-[#005FE6] bg-white px-6 py-3 rounded-full border-solid border border-[#005FE6] ">
              Back
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-center ml-96 font-semibold text-xl">
            Create New Event Type
          </h1>
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <div className="py-10 px-40">
          <table class="table w-full">
            <tbody>
              {eventType &&
                eventType.map((type) => (
                  <tr className="text-base" key={type.id}>
                    <td className="w-auto pb-10">
                      <img
                        src={type.img}
                        alt=""
                        style={{ height: "68px", width: "80px" }}
                      />
                    </td>
                    <td className="pb-10">
                      {type.title}{" "}
                      <span className="block">{type.description}</span>
                    </td>
                    <td className="text-end pb-10">
                      <Link to="/scheduleEvent">
                        <button className="text-base font-semibold text-white bg-blue-800 px-6 py-3 rounded-full hover:bg-blue-700">
                          Create
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventType;
