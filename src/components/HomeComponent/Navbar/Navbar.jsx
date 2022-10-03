import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-grey-darkest">
          <NavLink to="/" class="no-underline text-blue-700" href="#">
            CALENDLY
          </NavLink>
        </h1>
        <Link
          to="/"
          class="text-blue-700 hover:text-blue-600 md:hidden"
          href="#"
        >
          <i class="fa fa-2x fa-bars"></i>
        </Link>
      </div>

      <form class="mb-4 w-full md:mb-0 md:w-1/4">
        <label class="hidden" for="search-form">
          Search
        </label>
        <input
          class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
          placeholder="Search"
          type="text"
        />
        <button class="hidden">Submit</button>
      </form>

      <nav>
        <ul class="list-reset md:flex md:items-center">
          <li class="md:ml-4">
            <NavLink
              to="/profile"
              class="text-xl font-medium		 border-t block no-underline  py-2 text-grey-darkest hover:text-blue-800 md:border-none md:p-0"
              href="#"
            >
              Profile
            </NavLink>
          </li>
          <li class="md:ml-4">
            <NavLink
              to="/teams"
              class="text-xl font-medium		border-t block no-underline  py-2 text-grey-darkest hover:text-blue-800 md:border-none md:p-0"
              href="#"
            >
              Teams
            </NavLink>
          </li>
          <li class="md:ml-4">
            <NavLink
              to="/enterprise"
              class="text-xl font-medium		 border-t block no-underline  py-2 text-grey-darkest hover:text-blue-800 md:border-none md:p-0"
              href="#"
            >
              Enterprise
            </NavLink>
          </li>
          <li class="md:ml-4">
            <NavLink to="/login">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </NavLink>
          </li>
          <li class="md:ml-4">
            <NavLink to="/signup">
              <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                Signup
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
