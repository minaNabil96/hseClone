import React from "react";
import Landing from "../components/Landing";
import LandingNews from "../components/LandingNews";
import Events from "../components/Events";
import InNumbers from "../components/InNumbers";
import LandingSubFooter from "../components/LandingSubFooter";
import Hse360 from "../components/Hse360";
const HomePage = () => {
  return (
    <>
      <Landing />
      <LandingNews />
      <Events />
      <Hse360 />
      <InNumbers />
      <LandingSubFooter />
    </>
  );
};

export default HomePage;
