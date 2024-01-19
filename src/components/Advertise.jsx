import React from "react";

const Advertise = ({ brands }) => {
  return (
    <>
      <div className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden  ">
        {brands?.map((item, i) => (
          <img
            key={i}
            src={item.iconSrc}
            alt="ad/img"
            className="w-44 h-auto object-fill xl:w-38
           lg:w-32 cursor-pointer filter drop-shadow-md transition-all duration-300 hover:scale-105 "
          />
        ))}
      </div>
    </>
  );
};

export default Advertise;
