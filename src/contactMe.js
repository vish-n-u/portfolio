import React from "react";
import contactMe from "./assets/images/contactme.svg";

const ContactMe = () => {
  return (
    <div
      id="contactMe"
      className="flex lg:flex-row md:flex-row content-center lg:flex-nowrap md:flex-nowrap flex-wrap flex-col align-middle items-center lg:justify-between md:justify-between justify-evenly  min-h-screen w-screen bg-gradient-to-r from-pink-600/100 via-purple-700/90 to-indigo-900/100"
    >
      <img
        src={contactMe}
        alt="contactMe.png"
        className="h-[60%] lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-28"
      />
      <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full items-center ">
        <h1 className="text-3xl font-bold text-white my-10 self-start">
          Get in touch
        </h1>
        <div id="form" className="flex flex-col  w-full ">
          <div className="flex flex-col lg:flex-row md:flex-row    my-1 w-full">
            <input
              placeholder="First Name"
              type="text"
              className="bg-blend-saturation my-2 md:my-0 self-center lg:my-0 bg-white/20 border text-lg px-4 mx-1 border-white h-16  lg:w-[40%] md:w-[45%] w-1/2 min-w-[300px] rounded-3xl focus:bg-white ease-in transition-colors duration-500 text-white focus:text-black "
            />
            <input
              placeholder="Last Name"
              type="text"
              className="bg-white/20 text-lg my-2 md:my-0 self-center  lg:my-0  focus:bg-white/100 border px-4 mx-1 border-white h-16  lg:w-[40%] md:w-[45%] w-1/2 min-w-[300px] rounded-3xl ease-out transition-colors duration-500 text-white focus:text-black"
            />
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row my-1  w-full">
            <input
              placeholder="Email-Id"
              type="email"
              className="bg-white/20 text-lg my-2 md:my-0  self-center lg:my-0 focus:bg-white/100 px-4 border mx-1 border-white h-16 lg:w-[40%] md:w-[45%] w-1/2 min-w-[300px] rounded-3xl ease-in-out transition-colors duration-500 text-white focus:text-black"
            />
            <input
              placeholder="contactNo"
              type="tel"
              className="bg-white/20  text-lg my-2 md:my-0 self-center lg:my-0 focus:bg-white/100 px-4 border mx-1 border-white h-16 lg:w-[40%] md:w-[45%] w-1/2 min-w-[300px] rounded-3xl ease-linear transition-colors duration-500 text-white focus:text-black"
            />
          </div>
          <textarea
            type="text"
            className="lg:w-[80%] md:w-[90%] min-w-[300px] w-[55%] self-center lg:self-auto   text-white focus:text-black pt-10 px-5 text-lg items-start align-top content-start justify-start border focus:bg-white bg-white/20 border-white  h-64 ml-2 ease-linear transition-colors duration-500 rounded-2xl mt-2"
          />
        </div>

        <button
          className="self-start m-3 text-base p-3 bg-black w-36 lg:ml-0 md:ml-0 ml-8  text-white font-semibold hover:bg-white hover:text-black active:bg-rose-400 active:duration-0 transition duration-500"
          onClick={() => {
            console.log("sending mail");
            // window.Email.send({
            //   Host: "smtp.elasticemail.com",
            //   Username: "rapidosh77@outlook.co",
            //   Password: "218B2E52C5BD36638FAF2BA8E06F2687A399",
            //   To: "vishnuna26@gmail.com",
            //   From: "rapidosh77@outlook.com",
            //   Subject: "This is the subject",
            //   Body: "And this is the body",
            // }).then((message) => alert(message));
          }}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
