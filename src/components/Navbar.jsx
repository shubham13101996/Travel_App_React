import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopUpMenu from "./PopUpMenu";

const Navbar = ({ navlinks }) => {
  const [popUpState, setPopUpState] = useState(false);
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return ()=>{
      window.removeEventListener("scroll",onNavScroll)
    }
  }, []);


  const onTriggerPopUp = () => {
    setPopUpState(!popUpState);
  };
  return (
    <>
      <header className={`nav-default ${navState && "nav-sticky"}`}>
        <nav className="flex items-center justify-between travel-container">
          <NavLink to={"/"} className="flex items-center">
            <img src={logo} alt="logo/img" className=" w-22 h-9 object-fill" />
          </NavLink>
          <ul className=" flex items-center lg:hidden gap-7 ">
            {navlinks?.map((item) => (
              <li key={item.id} className="text-lg text-slate-900 ">
                <NavLink to={"#"}>{item.link}</NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button type="button" className="button-emerald px-7 text-base">
                Join Us
              </button>
            </li>
          </ul>

          <ul className="hidden lg:flex items-center ">
            <li className="">
              <button
                className="flex cursor-pointer items-center justify-center transition-all duration-200 active:scale-90 "
                type="button"
                onClick={onTriggerPopUp}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopUpMenu navlinks={navlinks} popUpState={popUpState} />
    </>
  );
};

export default Navbar;
