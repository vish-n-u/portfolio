//  Logo - Add the logo name
// eslint-disable-next-line
import React from "react";
import Linkedin from "./assets/images/linkedin";
import email from "./assets/images/email";
import leetcode from "./assets/images/leetcode";

import reactLogo from "./assets/images/skillsImages/react.png";
import mongoDbLogo from "./assets/images/skillsImages/mongodb.png";
import mysqlLogo from "./assets/images/skillsImages/mysql.png";
import expressLogo from "./assets/images/skillsImages/kisspng-node-js-express-js-javascript-solution-stack-web-a-5b22b9d57436d2.563861541529002453476.png";
import jsLogo from "./assets/images/skillsImages/js.png";
import html5Logo from "./assets/images/skillsImages/html5.png";
import cssLogo from "./assets/images/skillsImages/css.png";
import tailwindLogo from "./assets/images/skillsImages/tailwindcss.png";
import swiggyImg from "./assets/images/projectsImages/RapidoshLogo2.jpg";
import resumeImg from "./assets/images/projectsImages/resumeImg.jpg";

export const logo = "Portfolio";
// Add the list of connections
export const connectionArr = [Linkedin, leetcode, email];
export const myself = ["A software developer", "A MERN stack developer"];
export const userName = "Vishnu Nair";
export const skills = [
  { image: reactLogo, alt: "reactLogo" },
  { image: mongoDbLogo, alt: "mongoDbLogo" },
  { image: expressLogo, alt: "expressLogo" },
  { image: mysqlLogo, alt: "mysqlLogo" },
  { image: jsLogo, alt: "jsLogo" },
  { image: html5Logo, alt: "html5Logo" },
  { image: tailwindLogo, alt: "tailwindLogo" },
  { image: cssLogo, alt: "cssLogo" },
];

export const projects = {
  frontend: [
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
  ],
  backend: [
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
  ],
  fullstack: [
    {
      image: swiggyImg,
      name: "swiggyClone",
      alt: "swiggyImg.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        video: "url",
        live: "url",
      },
    },
    {
      image: resumeImg,
      name: "resume",
      alt: "resume.js",
      available: {
        code: "url",
        video: "url",
        live: "url",
      },
    },
  ],
};
