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
        <h3 className="text-5xl mb-4 font-bold ">Our Services</h3>
        <p className="text-lg">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin
          lorem quis <br /> bibendum auci elit consequat ipsutis sem nibh id
          elit
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            services?.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
