import React from "react";
import { skills } from "./config";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResponsiveCarousel = ({ skills }) => {
  const responsiveSettings = {
    0: {
      centerMode: false,
      centerSlidePercentage: 100,
      showStatus: false,
      showThumbs: false,
      showIndicators: false,
      swipeable: true,
      emulateTouch: true,
    },
    768: {
      centerMode: true,
      centerSlidePercentage: 33.3,
      showStatus: false,
      showThumbs: true,
      showIndicators: false,
      swipeable: true,
      emulateTouch: true,
    },
  };

  return (
    <div className="w-screen h-fit flex justify-center items-center bg-gradient-to-b from-stone-900 to-stone-700">
      <div
        id="skills"
        className=" lg:max-w-[50%] md:max-w-[70%] max-w-[90%] p-10 bg-stone-900/90 rounded-[50px] text-white lg:relative lg:-top-64 "
      >
        <h1 className="text-3xl font-semibold mb-5">Skills</h1>
        <h1 className="text-lg opacity-70 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          responsive={responsiveSettings}
          showThumbs={false}
          interval={2000}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-prev"
                onClick={onClickHandler}
              >
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-next"
                onClick={onClickHandler}
              >
                Next
              </button>
            )
          }
        >
          {skills.map((obj, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={obj.image}
                className="max-w-[160px] h-auto"
                alt="pic.png"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-screen h-screen ">
      <ResponsiveCarousel skills={skills} />;
    </div>
  );
};

export default Skills;
