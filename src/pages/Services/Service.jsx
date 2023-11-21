import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description, duration, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full h-64" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">
          {description.length > 150 ? (
            <p>
              {description.slice(0, 140)}
              <br />
              <Link className=" text-blue-500">Read more.....</Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </p>
        <p>Duration : {duration}</p>
        <p>Price : $ {price}</p>
        <div className="card-actions ">
          <Link to=''>
            <button className="btn btn-warning w-full">Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
