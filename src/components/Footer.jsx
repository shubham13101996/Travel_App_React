import React from "react";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="grid items-center grid-cols-3 justify-items-center ">
          {titles?.map((item, i) => (
            <div className="grid items-center justify-items-center" key={i}>
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {item.title}
              </h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1 "
            >
              {list?.map((val, i) => (
                <li key={i} className="font-medium text-sm sm:text-xs">
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9 ">
          <div className="h-[0.1vh] bg-/30 my-7 md:my-5 "></div>

          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center  ">
              Copyright<sup className="text-base font-bold">&copy; </sup>All
              Right Reserved 2024{" "}
              <span className="font-semibold "> Master Shoby Developer </span>{" "}
            </p>
            <div className="flex items-center gap-3 ">
              {sociallinks?.map((item, i) => (
                <img
                  src={item.icon}
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-300"
                  key={i}
                  alt="socialicon/img "
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
