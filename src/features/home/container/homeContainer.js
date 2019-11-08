import React from "react";

import AboutUs from "../components/aboutUs";
import Carousel from "../components/carousel";
import CheckAvability from "../components/checkAvailability";
import Event from "../components/event";
import OurRooms from "../components/roomsGallery";
import Services from "../components/services";
import StaffInfo from "../components/staffInfo";

const Home = () => {
  return (
    <div className="container-fluid">
      <h1>Home</h1>
      <AboutUs />
      <Carousel />
      <CheckAvability />
      <Event />
      <OurRooms />
      <Services />
      <StaffInfo />
    </div>
  );
};

export default Home;
