import React from "react";

const Access = ({ access }) => {
  const { number, name, des } = access;
  return (
    <div className="card bg-purple-600 text-neutral-content">
      <div className="card-body items-center text-center">
        <p className="text-3xl font-bold">{number}</p>
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="">{des}</p>
      </div>
    </div>
  );
};

export default Access;
