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
      
      <div className="text-center" data-aos="zoom-in-left" data-aos-duration="2000">
        <h3 className="md:text-5xl text-4xl lg:mb-4 font-bold text-purple-500">
          Top Tutors in Every Course
        </h3>
        <div className="text-lg text-justify md:text-center p-4 md:p-8 lg:p-0 lg:w-3/5 mx-auto">
          <p>We are our courses served by skillful tutors.They have been teaching our courses in very fluent technic
           with the students since last four-five years.Below is a list of some of the top tutors among them.
          </p>
          
        </div>
      </div>
      <div className="lg:mt-16 md:mt-10 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            tutors?.map(tutor => <Tutor key={tutor.id} tutor={tutor}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
