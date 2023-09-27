//  Logo - Add the logo name
// eslint-disable-next-line
import React from "react";
import Linkedin from "./assets/images/linkedin";
import leetcode from "./assets/images/leetcode";

import reactLogo from "./assets/images/skillsImages/react.png";
import mongoDbLogo from "./assets/images/skillsImages/mongodb.png";
import mysqlLogo from "./assets/images/skillsImages/mysql.png";
import expressLogo from "./assets/images/skillsImages/kisspng-node-js-express-js-javascript-solution-stack-web-a-5b22b9d57436d2.563861541529002453476.png";
import jsLogo from "./assets/images/skillsImages/js.png";
import html5Logo from "./assets/images/skillsImages/html5.png";
import cssLogo from "./assets/images/skillsImages/css.png";
import tailwindLogo from "./assets/images/skillsImages/tailwindcss.png";
import swiggyImg from "./assets/images/projectsImages/swiggyCloneImg.JPG";
import portfolioImg from "./assets/images/projectsImages/portfolioImg.JPG";
import youtubeImg from "./assets/images/projectsImages/youtube.png";
import backendImg from "./assets/images/projectsImages/backend.jpg";
import chatAppImg from "./assets/images/projectsImages/chatApp.PNG"
import excelCloneImg from "./assets/images/projectsImages/excel-clone.PNG"

export const emailPassword = process.env.REACT_APP_EmailPassword;

export const logo = "Portfolio";
// Add the list of connections
export const connectionArr = [
  [Linkedin, "https://www.linkedin.com/in/vishnu-nair-439472204/", "linkedin"],
  [leetcode, "https://leetcode.com/vishnuna26/", "leetcode"],
];
export const myself = ["A software developer", "A MERN stack developer"];
export const userName = "Vishnu Nair";
export const aboutMe = `Passionate and innovative full-stack software developer with experience in front-end and back-end technologies. Thrives on creating user-friendly applications and enjoys collaborating in a team environment. Eager to learn and make a meaningful impact. Let's build amazing things together! 🚀`;
export const skillsTagline = `Empowering Innovation with Expertise: Full-Stack Developer |
Front-End | Back-End | Problem Solver`;
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
      image: youtubeImg,
      name: "youtubeClone-App",
      alt: "youtube.png",
      available: {
        Code: "https://github.com/vish-n-u/youtubeClone",
        Live: "https://teal-muffin-4b5eff.netlify.app/",
      },
    },{
      image : excelCloneImg,
      name:"ExcelClone",
      alt:"excel.png",
      available:{
        Code:"https://github.com/vish-n-u/Excel-clone-",
        Live:"https://excel-clone12.netlify.app/"
      },
    },
    {
      image: portfolioImg,
      name: "Portfolio-App",
      alt: "resume.jpg",
      available: {
        Code: "url",
        Video: "url",
        Live: "url",
      },
    },
  ],
  backend: [
    {
      image: backendImg,
      name: "FlighBooking App",
      alt: "backendImg.js",
      available: {
        Code: "https://github.com/vish-n-u/fligh-Booking-App",
      },
    },
    {
      image: backendImg,
      name: "Ecommerce App",
      alt: "backendImg.js",
      available: {
        Code: "https://github.com/vish-n-u/ecommerce",
      },
    },
    {
      image: backendImg,
      name: "crmApp",
      alt: "backendImg.js",
      available: {
        Code: "https://github.com/vish-n-u/crmApp",
      },
    },
  ],
  fullstack: [
    {
      image: swiggyImg,
      name: "SwiggyClone App",
      alt: "swiggyImg.png",
      available: {
        Code: "https://github.com/vish-n-u/foodVillaApp",
        Video: "https://www.youtube.com/watch?v=Tpbe2MsCvZo",
        Live: "https://main--deluxe-cuchufli-f03acb.netlify.app/",
      },
    },
    {
      name:"Chat Application",
      alt:"chatApp.png",
      image:chatAppImg
    ,
    available:{
      Code:"https://github.com/vish-n-u/portfolio",
      Live:"https://cerulean-puffpuff-0bd317.netlify.app/",
      Video:"https://youtu.be/rcnquCpQdHc"
    }
  }
  ],
};
