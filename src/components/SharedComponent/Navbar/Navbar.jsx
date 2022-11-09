import { Avatar, MenuItem } from "@mui/material";
// import { useState } from "react";
// import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import shallow from "zustand/shallow";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";
import useProfileStore from "../../../store/useProfileStore";

const Navbar = () => {
  // global storage
  const [userProfile] = useProfileStore(
    (state) => [state.userProfile],
    shallow
  );

  // const [open, setOpen] = useState(false);

  const { logout } = useLogout();
  const { user } = useAuthContext();

  // let Links = [
  //   { name: "Home", link: "/" },
  //   { name: "About", link: "/" },
  //   { name: "Services", link: "/" },

  //   { account: "Login/Log out", link: "/login" },
  // ];
  // let [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-blue-700">
            CALENDLY
          </span>
        </Link>
        <div className="flex md:order-2">
          <ul className="flex flex-col p-2 text-bold">
            <li>
              {" "}
              {user ? (
                <>
                  <ul className="flex ">
                    <li>
                      <Link to={"/profile"}>
                        <MenuItem className="hover:bg-transparent">
                          <Avatar
                            alt={userProfile?.name}
                            src={
                              userProfile?.profile_image
                                ? userProfile?.profile_image
                                : "#"
                            }
                          />{" "}
                          <span>{userProfile?.name}</span>
                        </MenuItem>
                      </Link>
                    </li>

                    <li>
                      <button
                        className="text-lg font-bold block py-2 pr-4 pl-3 text-red-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                        onClick={() => logout()}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                // <button
                //   className="text-lg font-bold block py-2 pr-4 pl-3 text-red-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                //   aria-current="page"
                //   onClick={() => logout()}
                // >
                //   Log out
                // </button>
                <NavLink
                  to="/login"
                  className="text-lg font-bold block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
          {user && (
            <button className="text-white bg-blue-700 hover:bg-blue-800 rounded px-4">
              Get started
            </button>
          )}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ffillrule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  ffillrule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="text-lg block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-lg block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </NavLink>
            </li>

            {/* <li>
              {user && userProfile && (
                <>
                  <Link to={"/profile"}>
                    <MenuItem className='hover:bg-transparent'>
                      <Avatar alt={userProfile?.name} src={userProfile?.profile_image ? userProfile?.profile_image : "#"} /> {' '} <span>{userProfile?.name}</span>
                    </MenuItem>
                  </Link>




                  <li className='lg:flex items-center space-x-3 text-base lg:my-0 my-7'>
                  <span className='text-base  text-black font-sans'></span>
                  <button
                    onClick={() => logout()}
                    className='border-2 text-[#106731] border-[#106731] px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-[#106731] duration-200'>
                    logout
                  </button>
                </li> 
                </>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
