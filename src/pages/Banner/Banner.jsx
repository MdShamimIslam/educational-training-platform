import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-12">
      <div className="flex-1 lg:mr-48 m-6">
        <h2 className="text-5xl font-bold mb-5 text-green-600 text-center lg:text-start">Accelerate Your Career !!</h2>
        <p className="text-lg text-justify">
        Our programs are crafted to match the current industry needs, ensuring you stay ahead of the curve.
        Gain practical experience through real-world projects, applying what you learn in a simulated work environment.
        Fit your studies into your schedule with our flexible online learning platform.
        </p>
      </div>
      <div className="">
        <img className="w-[600px]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
