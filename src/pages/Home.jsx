import React from "react";

import Header from "../components/HomeComponent/Header/Header";
// import Newslatter from '../components/HomeComponent/Newslatter/Newslatter'
import Schedule from "../components/HomeComponent/Schedule/Schedule";
import Solution from "../components/HomeComponent/Solution/Solution";
import Sponsors from "../components/HomeComponent/Sponsors/Sponsors";
import Free from "../components/HomeComponent/Free/Free";
import Calendly from "../components/HomeComponent/Calendly/Calendly";

const Home = () => {
  return (
    <div>
      <Header />
      <Schedule />
      <Calendly/>
      <Sponsors />
      <Solution /> 
      <Free />
      {/* <Newslatter/> */}
    </div>
  );
};

export default Home;
