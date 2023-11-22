import React, { useEffect, useState } from "react";
import Event from "./Event";

const ComingEvents = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("comingCourses.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="mt-24">
      <div className="text-center " data-aos="zoom-out-up" data-aos-duration="2000">
        <h3 className="md:text-5xl text-4xl font-bold text-green-600 lg:mb-4">Upcoming Courses</h3>
        <div className="text-lg text-justify md:text-center p-4 md:p-8 lg:p-0 lg:w-3/5 mx-auto">
          <p> We hope you have learned a lot from the previous courses.So we want to offer some more courses 
          to take your skill level to a higher level. We are interested in these new  courses based
          on your good feedback from previous courses. 
          </p>
       
        </div>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {
            events?.map(event => <Event key={event.id} event={event}></Event>)
        }
      </div>

    </div>
  );
};

export default ComingEvents;
