import React from "react";

const Tutor = ({ tutor }) => {
  const { img,name,passion} = tutor;
  return (
    <div className="flex justify-center"  data-aos="flip-left"  data-aos-duration="2000" >
      <div className="flex items-center gap-6 mb-6">
      <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-lg">{passion}</p>
      </div>
    </div>
    </div>
  );
};

export default Tutor;
