import React, { useEffect, useRef, useState } from "react";
// import BorderColorIcon from "@mui/icons-material/BorderColor";

import useProfileStore from "../store/useProfileStore";
import shallow from "zustand/shallow";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePatchRequest } from "../hooks/requestMethods";
import ProfileUpdateModal from "../components/Profile/ProfileUpdateModal";
import { Link } from "react-router-dom";

export const ProfileImage = () => {
  // global storage
  const [userProfile, setUserProfile] = useProfileStore(
    (state) => [state.userProfile, state.setUserProfile],
    shallow
  );
  const { user } = useAuthContext();
  const { data: getUpdateData, updateData } = usePatchRequest();

  const fileInput = useRef(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const data = {
        profileImg: reader.result.toString(),
      };
      updateData("/api/user/profile", user.token, data);
    };
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (getUpdateData) {
      setUserProfile(getUpdateData);
    }
  }, [getUpdateData, setUserProfile]);
  return (
    <>
      <label
        htmlFor="dropzone-file"
        className="cursor-pointer"
        onClick={(e) => fileInput.current && fileInput.current.click()}
      >
        <img
          src={
            userProfile?.profileImg
              ? userProfile?.profileImg
              : "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
          }
          alt=""
          className="inline-block m-auto w-32 h-32 rounded-full md:w-48 md:h-48 md:rounded-full"
        />
        <input
          id="dropzone-file"
          className="hidden"
          accept="image/*"
          multiple
          type="file"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

const Profile = () => {
  // global storage
  const [userProfile] = useProfileStore(
    (state) => [state.userProfile],
    shallow
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:w-9/12 m-auto space-y-6 px-4">
        <div className="text-end py-10">
          <Link to="/eventType">
            <button className="text-base font-semibold text-white bg-blue-800 px-6 py-3 rounded-full hover:bg-blue-700">
              Create
            </button>
          </Link>
        </div>
        <div className="text-center space-y-2">
          <ProfileImage />
          <p className="capitalize text-xl font-extrabold">
            {userProfile?.name}
          </p>
        </div>
        <div>
          <table className="table-auto m-auto">
            <tbody>
              <tr>
                <td className="py-2 pr-10 capitalize font-extrabold">
                  Full Name
                </td>
                <td className="py-2 capitalize font-semibold">
                  {userProfile?.name}
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-10 capitalize font-extrabold">Email</td>
                <td className="py-2 font-semibold">{userProfile?.email}</td>
              </tr>

              <tr>
                <td className="py-2 pr-10 capitalize font-extrabold">mobile</td>
                <td className="py-2 font-semibold">
                  {userProfile?.mobile_number}
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-10 capitalize font-extrabold">about</td>
                <td className="py-2 font-semibold">{userProfile?.about}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="text-center py-10">
          <button
            onClick={() => setOpen(!open)}
            className="text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500"
          >
            <BorderColorIcon className="mr-2" />
            edit profile
          </button>
        </div> */}

        <div className="text-center py-10">
          <button
            onClick={() => setOpen(!open)}
            className="text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500"
          >
            Edit Profile
          </button>
        </div>
      </div>
      {userProfile && (
        <ProfileUpdateModal open={open} setOpen={(x) => setOpen(x)} />
      )}
    </>
  );
};

export default Profile;
