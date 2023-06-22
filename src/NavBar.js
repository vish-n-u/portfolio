import React, { useState, useEffect } from "react";
import { logo, connectionArr } from "./config";
import "./j.css";
import CarouselComponent from "./Skills";
import Home from "./Home";
import backgroundImg from "./assets/images/banner-bg.png";

import Projects from "./Projects";

const NavBar = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial screen size
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("screenSize---", screenSize);

  return (
    <div className="bg-black flex flex-col">
      <img
        className="min-h-[1000px] lg:max-h-screen lg:h-auto  w-screen"
        src={backgroundImg}
        alt="bg.img"
      />
      {screenSize.width > 768 ? (
        <div className="bg-transparent  h-full  flex flex-col w-screen absolute z-20 -top-20 my-5 justify-start items-start align-top mt-10">
          <div className="bg-transparent flex md:my-10 w-[95%] justify-between z-40 top-0 mr-5 fixed mt-10">
            <h1 className="text-2xl w-min-[10%]  font-bold  text-white mt-4 ml-6">
              {logo}
            </h1>
            <div className="w-max-[80%] flex justify-end mx-5">
              <div className="w-max-[40%] flex">
                <h1 className="text-xl  mt-4 text-white/50 m-3  hover:text-white cursor-pointer">
                  Home
                </h1>
                <h1 className="text-xl  mt-4 text-white/50 m-3  hover:text-white cursor-pointer">
                  Skills
                </h1>
                <h1 className="text-xl  mt-4 text-white/50 m-3 hover:text-white cursor-pointer">
                  Projects
                </h1>
              </div>

              <div className="flex mx-5 w-min-[30%]">
                {connectionArr.map((val) => {
                  return (
                    <button className="w-16 h-11 bg-gray-200/100   hover:border hover:border-white  flex items-center mt-3 justify-center rounded-full mr-2 hover:bg-red-500 hover:text-white  hover:fill-white transition-colors duration-300">
                      <span>{val}</span>
                    </button>
                  );
                })}
              </div>
              <div className="w-full">
                <button className="btn min-w-[170px] w-full  relative   max-w-[176px] h-16 border  align-middle inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                  <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full flex justify-center  text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Let's Connect!
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Home />
        </div>
      ) : (
        <div className="bg-transparent absolute flex flex-col w-screen  top-5 my-5 ">
          <div className="w-screen flex fixed justify-between">
            <h1 className="text-lg font-semibold  text-white my-2 mx-5  mt-4">
              {logo}
            </h1>
            <h1
              className="text-3xl font-bold self-end flex justify-self-end content-end   text-white mx-5 "
              onClick={() => setOnClick(!onClick)}
            >
              =
            </h1>
          </div>
          {onClick && (
            <div className="w-screen bg-black/60  left-5 flex flex-col justify-start items-start align-top  mx-5 z">
              <h1 className="text-lg opacity-80 mt-0 text-white  mx-6 hover:opacity-100 cursor-pointer">
                Home
              </h1>
              <h1 className="text-lg opacity-80 mt-0 text-white  mx-6 hover:opacity-100 cursor-pointer">
                Skills
              </h1>
              <h1 className="text-lg opacity-80 mt-0 text-white  mx-6 hover:opacity-100 cursor-pointer">
                Projects
              </h1>

              <div className="flex">
                <div className="flex mx-5">
                  {connectionArr.map((val) => (
                    <button className="w-16 h-11 bg-white   hover:border hover:border-white  flex items-center mt-3 justify-center rounded-full mr-2 hover:bg-red-500 hover:text-white  hover:fill-white transition-colors duration-300">
                      <span>{val}</span>
                    </button>
                  ))}
                </div>
                <button className="btn min-w-[130px]  relative  w-44 h-16 border mt-2 align-middle inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                  <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full flex justify-center  text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Let's Connect!
                  </span>
                </button>
              </div>
            </div>
          )}
          <Home />
        </div>
      )}
      <CarouselComponent />
      <Projects />
    </div>
  );
};

export default NavBar;
