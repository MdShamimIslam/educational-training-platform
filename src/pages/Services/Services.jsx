import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center ">
        <h3 className="md:text-5xl text-4xl font-bold lg:mb-4">Our Courses</h3>
        <div className="text-lg text-justify md:text-center p-4 md:p-8 lg:p-0 lg:w-3/5 mx-auto">
        <p>You can check our courses to reach the highest level of your skills in keeping
        with the current generation.Our courses are presented in very clear techniques so that you can understand them very easily.
        </p> 
        </div>
      </div>
      <div className="md:mt-10 lg:mt-16 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-0">
        {
            services?.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
