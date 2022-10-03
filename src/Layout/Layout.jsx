import React from "react";

import Navbar from "../components/HomeComponent/Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navbar />
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/enterprise">Enterprise</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
        <Link to="/teams">Teams</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signin">Signin</Link>
        <br /> */}
      </nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
