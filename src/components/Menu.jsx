import React, { useState } from "react";
import { menuItems } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const btnText = [
    "Classic Mojito",
    "Raspberry Mojito",
    "Violet Breeze",
    "Curacao Mojito",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = menuItems[currentIndex];

  useGSAP(() => {
    gsap.from(".mojito-img", {
      x: -200,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".mojito-details", {
      y: 30,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".mojito-name", {
      y: 10,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, [currentIndex]);

  const nextItem = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const prevItem = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const isMaxIndex = currentIndex === menuItems.length - 1;
  const isMinIndex = currentIndex === 0;

  return (
    <section className="flex flex-col overflow-hidden mt-[40vh] h-[100vh] px-4 lg:px-10 relative gap-10 w-full">
      <div className="absolute left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 size-[600px] -z-10 bg-radial-[at_50%_50%] from-[#434343] to-transparent rounded-full blur-3xl "></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {btnText.map((title, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex flex-col items-center group  transition-all duration-300 ease-in-out text-white/50 gap-3"
          >
            <p className="text-xl text-nowrap group-hover:text-white">
              {title}
            </p>
            <div className="h-1 w-full bg-white/50 group-hover:bg-white"></div>
          </button>
        ))}
      </div>
      <div className="absolute z-10 flex items-center top-40 left-6 lg:left-40">
        <button
          disabled={isMinIndex}
          onClick={prevItem}
          className="flex flex-col hover:text-amber-200 items-center "
        >
          <p className="text-2xl ">Previous</p>
          <img src="./images/right-arrow.png" alt="" />
        </button>
      </div>
      <div className="absolute z-10 flex items-center top-40 right-6 lg:right-40">
        <button
          disabled={isMaxIndex}
          onClick={nextItem}
          className="flex flex-col  hover:text-amber-200  not-first: items-center"
        >
          <span className="text-2xl ">Next</span>
          <img src="./images/left-arrow.png" alt="left-arrow" />
        </button>
      </div>

      <div className="  w-full flex items-center justify-center ">
        {currentItem.image && (
          <>
            <div className="relative flex items-center justify-center  w-full">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="mojito-img"
              />
              <div className="hidden mojito-details lg:flex flex-col gap-2 absolute bottom-50 top-1/2 max-w-md right-40">
                <p className="font-bold text-4xl">{currentItem.title}</p>
                <p className="text-xl">{currentItem.description}</p>
              </div>
              <div className="hidden mojito-name lg:flex flex-col gap-2 absolute bottom-50 top-3/4 max-w-md left-30">
                <p>Recipe for:</p>
                <p className="font-bold text-amber-200 text-3xl">
                  {currentItem.name}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <p>Recipe for:</p>
          <p>{currentItem.name}</p>
        </div>
        <p>{currentItem.title}</p>
      </div>
    </section>
  );
};

export default Menu;
