import React, { useEffect, useState } from "react";
import Tutor from "./Tutor";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("tutors.json")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  return (
    <div className="mt-24">
      <div className="text-center ">
        <h3 className="text-5xl mb-4 font-bold text-purple-500">
         
          Top Tutors in Every Course
        </h3>
        <p className="text-lg">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin
          lorem quis <br /> bibendum auci elit consequat ipsutis sem nibh id
          elit
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            tutors?.map(tutor => <Tutor key={tutor.id} tutor={tutor}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
