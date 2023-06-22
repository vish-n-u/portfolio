import React, { useEffect, useState } from "react";
import HeaderImg from "./assets/images/header-img.svg";

import "./animateDiv.css";
import { myself } from "./config";
import { userName } from "./config";

const Home = () => {
  const [isUp, setIsUp] = useState(false);
  const [myselfIndex, setMySelfIndex] = useState(0);
  const [isMySelfIncreasing, setIsMySelfIncreasing] = useState(true);
  const [myselfTextIndex, setMyselfTextIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (isMySelfIncreasing) {
        if (myselfTextIndex === myself[myselfIndex].length - 1) {
          setIsMySelfIncreasing(false);
        }
        setMyselfTextIndex(myselfTextIndex + 1);
      } else return;
    }, 200);

    setTimeout(() => {
      if (isMySelfIncreasing) return;
      if (myselfTextIndex === 1) {
        setIsMySelfIncreasing(true);
        if (myselfIndex === myself.length - 1) setMySelfIndex(0);
        else setMySelfIndex(myselfIndex + 1);
      }
      setMyselfTextIndex(myselfTextIndex - 1);
    }, 100);
  }, [isMySelfIncreasing, myselfTextIndex]);

  const toggleAnimation = () => {
    setIsUp(!isUp);
  };
  useEffect(() => {
    setTimeout(() => {
      toggleAnimation();
    }, 2500);
  }, [isUp]);
  useEffect(() => {
    toggleAnimation();
  }, []);

  return (
    <div
      id="home"
      className="flex lg:flex-row flex-col lg:-mt-24 relative  top-24 m-5 items-center justify-between  lg:justify-around align-middle h-full"
    >
      <div className="flex flex-col justify-center items-start md:my-24 lg:w-1/2">
        <h1 className="p-2 border  border-violet-800 bg-gradient-to-r from-fuchsia-800/40 via-indigo-500/40 to-blue-800/40 text-white font-bold py-2 px-5">
          <span className="opacity-100 text-xl font-semibold">
            Welcome to my Portfolio
          </span>
        </h1>
        <h1 className="text-4xl font-bold text-white">
          I am {userName + "      "}
          <span>{myself[myselfIndex].slice(0, myselfTextIndex)}</span>
        </h1>
        <h1 className="text-lg text-white mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </h1>
      </div>
      <img
        src={HeaderImg}
        alt="numb.js"
        className={`h-96 w-96 lg:mt-0 mt-10 animated-div ${isUp ? "up" : ""}`}
      ></img>
    </div>
  );
};

export default Home;
