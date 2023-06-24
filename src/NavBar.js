import React, { useState, useEffect } from "react";
import { logo, connectionArr } from "./config";
import "./j.css";
import Skills from "./Skills";
import Home from "./Home";
import backgroundImg from "./assets/images/banner-bg.png";
import ContactMe from "./contactMe";

import Projects from "./Projects";

function scrollToHome(id) {
  // Your custom function code here
  // console.log("Home button clicked!");

  const section = document.querySelector(id);
  // console.log("h22s", section);
  const sectionTop = section.offsetTop - 100;
  // console.log(sectionTop);
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}

const NavBar = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [showNavBar, setShowNavBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [highLightSections, setHighLightSections] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
      const homeSection = document.querySelector("#home").offsetTop - 100;
      const skillsSection = document.querySelector("#skills").offsetTop - 100;
      const projectsSection =
        document.querySelector("#projects").offsetTop - 100;

      if (scrollTop < skillsSection) {
        if (highLightSections !== "home") setHighLightSections("home");
      } else if (scrollTop < projectsSection) {
        if (highLightSections !== "skills") setHighLightSections("skills");
      } else {
        if (highLightSections !== "projects") setHighLightSections("projects");
      }
    });
    console.log("highLightSections", highLightSections);
  });
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
      if (scrollTop > 50 && !scrolled) {
        // User has scrolled more than 50 pixels
        setScrolled(true);
        // console.log("Scrolled more than 50 pixels");
        // You can perform any desired actions here
      } else {
        if (scrollTop < 50 && scrolled) setScrolled(false);
      }
    });
  });

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
        <div
          className={`bg-transparent  h-full  flex flex-col w-screen absolute z-20 -top-20 mt-24 justify-start items-start align-top `}
        >
          <div
            className={`flex   justify-between z-40  ${
              scrolled
                ? "bg-black/100 -top-0 w-screen py-4 p-2 transition duration-200 ease-in"
                : " top-0 bg-transparent mt-10 md:my-10 w-[95%] transition duration-200 ease-in"
            } mr-5 fixed `}
          >
            <h1 className="text-2xl w-min-[10%]  font-bold  text-white mt-4 ml-6">
              {logo}
            </h1>
            <div className="w-max-[80%] flex justify-end mx-5">
              <div className="w-max-[40%] flex">
                <h1
                  onClick={() => scrollToHome("#home")}
                  className={`text-xl  mt-4  m-3  hover:text-white cursor-pointer ${
                    highLightSections === "home"
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  Home
                </h1>
                <h1
                  onClick={() => scrollToHome("#skills")}
                  className={`text-xl  mt-4  m-3  hover:text-white cursor-pointer ${
                    highLightSections === "skills"
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  Skills
                </h1>
                <h1
                  onClick={() => scrollToHome("#projects")}
                  className={`text-xl  mt-4  m-3 hover:text-white cursor-pointer ${
                    highLightSections === "projects"
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  Projects
                </h1>
              </div>

              <div className="flex mx-5 w-min-[30%]">
                {connectionArr.map((val) => {
                  return (
                    <a
                      key={val[0]}
                      href={val[1]}
                      target="_blank"
                      className="w-16 h-11 bg-gray-200/100   hover:border hover:border-white  flex items-center mt-3 justify-center rounded-full mr-2 hover:bg-transparent hover:text-white  hover:fill-white transition-colors duration-500"
                    >
                      <h1>{val[0]}</h1>
                    </a>
                  );
                })}
              </div>
              <div className="w-full">
                <button className="btn min-w-[170px] w-full  relative   max-w-[176px] h-16 border  align-middle inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                  <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span
                    onClick={() => scrollToHome("#contactMe")}
                    className="relative w-full flex justify-center  text-lg text-black transition-colors duration-300 ease-in-out group-hover:text-white"
                  >
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
          <div
            className={`w-screen flex fixed justify-between z-40 ${
              scrolled
                ? "bg-black/100 -top-0 w-screen py-4 p-2 transition duration-200 ease-in"
                : " top-0 bg-transparent mt-10 md:my-10 w-[95%] transition duration-200 ease-in"
            }`}
          >
            <h1 className="text-lg font-semibold  text-white my-2 mx-5  mt-4">
              {logo}
            </h1>
            <h1
              className="text-3xl font-bold self-end flex cursor-pointer justify-self-end content-end   text-white mx-5 z-50  "
              onClick={() => setShowNavBar(!showNavBar)}
            >
              =
            </h1>
          </div>
          {showNavBar && (
            <div className=" bg-black fixed top-24 w-full  left-1 flex flex-col    mx-5 z-50">
              <h1
                onClick={() => {
                  scrollToHome("#home");
                  setShowNavBar(false);
                }}
                className={`mt-2 text-base opacity-80  text-white  mx-6 hover:opacity-100 cursor-pointer ${
                  highLightSections === "home" ? "text-white" : "text-white/50"
                }`}
              >
                Home
              </h1>
              <h1
                onClick={() => {
                  scrollToHome("#skills");
                  setShowNavBar(false);
                }}
                className={`text-base opacity-80 mt-0 text-white  mx-6 hover:opacity-100 cursor-pointer ${
                  highLightSections === "skills"
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                Skills
              </h1>
              <h1
                onClick={() => {
                  scrollToHome("#projects");
                  setShowNavBar(false);
                }}
                className={`text-base opacity-80 mt-0 text-white  mx-6 hover:opacity-100 cursor-pointer ${
                  highLightSections === "projects"
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                Projects
              </h1>

              <div className="flex">
                <div className="flex mx-5">
                  {connectionArr.map((val) => (
                    <a
                      key={val[0]}
                      href={val[1]}
                      target="_blank"
                      className="w-10 h-10 bg-white   hover:border hover:border-white  flex items-center mt-3 justify-center rounded-full mr-2 hover:bg-transparent hover:text-white  hover:fill-white transition-colors duration-300"
                    >
                      <h1>{val[0]}</h1>
                    </a>
                  ))}
                </div>
                <button className="btn min-w-[130px]  mb-4 relative  w-36 h-12 border mt-2 align-middle inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                  <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span
                    onClick={() => {
                      scrollToHome("#contactMe");
                      setShowNavBar(false);
                    }}
                    className={`relative w-full flex justify-center text-center  text-base text-black transition-colors duration-300 ease-in-out group-hover:text-white ${
                      highLightSections === "contactMe" ? "text-white" : ""
                    }`}
                  >
                    Let's Connect!
                  </span>
                </button>
              </div>
            </div>
          )}
          <Home />
        </div>
      )}
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default NavBar;
