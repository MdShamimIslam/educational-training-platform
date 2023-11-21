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
      <div className="text-center ">
        <h3 className="text-5xl mb-4 font-bold text-green-600">Upcoming Courses</h3>
        <p className="text-lg">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin 
          lorem quis <br /> bibendum auci elit consequat ipsutis sem nibh id elit
        </p>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            events?.map(event => <Event key={event.id} event={event}></Event>)
        }
      </div>

    </div>
  );
};

export default ComingEvents;
