import React from "react";
import { NavLink } from "react-router-dom";

const PopUpMenu = ({ navlinks, popUpState }) => {
  return (
    <>
      <nav
        className={`
   fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 
   backdrop-filter backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 hidden lg:flex items-center justify-center
   transition-transform duration-200 ${
     popUpState ? "showpopup" : "noshowpopup"
   } `}
      >
        <ul className="flex items-start flex-col gap-3">
          {navlinks?.map((item, i) => (
            <li className="" key={i}>
              <NavLink to={"#"} className="">
                {item.link}
              </NavLink>
            </li>
          ))}
          <li className="">
            <button
              type="button"
              className="button-light  sm:w-auto shadow-slate-300 rounded-lg "
            >
              Join Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopUpMenu;
