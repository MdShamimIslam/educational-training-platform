import React from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();
  const service = services.find((singleService) => singleService.id === idInt);
  const { title, img, description, rating } = service;

  return (
    <div className="card w-[900px] bg-base-500 shadow-xl mx-auto my-16 ">
      <figure>
        <img src={img} className="w-full h-[400px]" alt="Course-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <p className="flex items-center gap-3 mt-2">
          <Rating initialRating={rating} readonly />
          <span className="text-2xl font-medium">{rating}</span> 
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
