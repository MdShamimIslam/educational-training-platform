import React from 'react';

const Event = ({event}) => {
    const { img, title, price, location, date } = event;
    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="flip-right" data-aos-duration="2000">
        <figure>
          <img
            src={img}
            className="w-full h-64"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-lg">Location : {location}</p>
          <p className="text-lg">Publish-Date : {date}</p>
          <p className="text-lg">Price : ${price}</p>
          
        </div>
      </div>
    );
};

export default Event;