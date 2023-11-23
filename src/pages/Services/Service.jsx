import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id,title, img, description, duration, price } = service;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl " data-aos="zoom-in" data-aos-duration="2000">
      <figure>
        <img src={img} className="w-full h-64" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="">
          {description.length > 150 ? (
            <span>
              {description.slice(0, 140)}
              <br />
              <Link to={`/service/${id}`} className=" text-blue-500">Read more.....</Link>
            </span>
          ) : (
            <span>{description}</span>
          )}
          
        </p>
        <p>Duration : {duration}</p>
        <p>Price : $ {price}</p>
        <div>
          <Link to={`/service/${id}`}>
            <button className="btn btn-warning w-full">Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
