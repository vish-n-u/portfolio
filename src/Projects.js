import React from "react";
import { useState } from "react";
import { projects } from "./config";
import "./j.css";

const ColorChangingButton = () => {
  const arr = Object.keys(projects);
  const percentage = Math.round(100 / arr.length) + "%";
  const [clickedButton, setClickedButton] = useState("frontend"); // Initialize with -1 to indicate no button is clicked

  const handleClick = (index) => {
    setClickedButton(index);
  };
  console.log(percentage);
  return (
    <div className="w-screen flex flex-col justify-evenly align-middle  items-center bg-black">
      <div className="lg:w-1/2 w-[80%]  min-h-[10%]  my-4">
        {Object.keys(projects).map((val, index) => (
          <button
            key={index}
            onClick={() => handleClick(val)}
            style={{ minWidth: percentage }}
            className={` h-14 border  ${
              index === 0
                ? "rounded-l-full"
                : index === arr.length - 1
                ? "rounded-r-full"
                : ""
            } align-middle inline-flex items-center ${
              clickedButton === val
                ? "bg-gradient-to-br from-fuchsia-500/70 via-purple-700/70 to-indigo-600/80"
                : "bg-gray-900/90"
            } justify-center  hover:bg-gray-900/10 `}
          >
            <span
              className={`relative w-full flex justify-center text-lg text-white transition-colors duration-300 ease-in-out group-hover:text-white`}
            >
              {val}
            </span>
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row md:flex-row bg-black flex-col flex-wrap max-h-[90%] justify-center items-center h-full  w-full">
        {projects[clickedButton].map((obj) => {
          return (
            <>
              <div
                key={obj.name}
                id="main"
                className="image-container group m-4 lg:min-w-[400px] lg:w-1/4 md:w-1/3 lg:max-w-[450px] max-w-[300px] aspect-[7/5] relative"
              >
                <div className="overlay"></div>
                <img src={obj.image} alt={obj.alt} className="image" />
                <div className="w-full h-full  z-50 flex absolute bottom-0 justify-evenly">
                  {Object.keys(obj.available).map((val, index) => {
                    let position =
                      index === 0 ? "30%" : index === "1" ? "50%" : "70%";
                    console.log(position, Object.keys(obj.available).length);
                    return (
                      <a
                        href={obj.available[val]}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={val}
                        className={`relative bottom-0  text-white font-semibold text-xl transition-all  duration-500 ease-in-out transform translate-y-full group-hover:translate-y-[40%] `}
                      >
                        {val}
                      </a>
                    );
                  })}
                  <h1 className="absolute bottom-0  text-black font-semibold text-xl transition-all  duration-500 ease-in-out transform translate-y-full group-hover:translate-y-[-10%] ">
                    {obj.name}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex relative -top-64 h-fit  items-center flex-wrap"
    >
      <ColorChangingButton />
    </div>
  );
};

export default Projects;
