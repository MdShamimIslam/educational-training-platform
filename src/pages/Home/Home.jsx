import React from "react";
import Banner from "../Banner/Banner";
import ComingEvents from "../ComingEvents/ComingEvents";
import Tutors from "../Tutors/Tutors";
import Services from "../Services/Services";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>s.Academy || Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Tutors></Tutors>
      <ComingEvents></ComingEvents>
    </div>
  );
};

export default Home;
