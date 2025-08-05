import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const startValue = isMobile ? "top 50%" : "top 80%";
    // text animations
    const customTitle = new SplitText(".custom-title", {
      type: "words",
    });
    const aboutPara = new SplitText(".about-para, .rating", {
      type: "words",
    });
    gsap.from(customTitle.words, {
      stagger: 0.06,
      duration: 1.8,
      ease: "expo.out",
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    // grid
    const gridTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: startValue,
      },
    });
    gridTl
      .from(aboutPara.words, {
        duration: 1,
        stagger: 0.06,
        opacity: 0,
        ease: "expo.out",
        y: 10,
      })
      .from(
        ".top-grid > div, .bottom-grid > div",
        {
          stagger: 0.2,
          y: 0,
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        1
      );
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col gap-6 h-full w-full px-4 lg:px-0 lg:max-w-6xl pt-10"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full lg:max-w-6xl  mx-auto">
        <div className="flex flex-col lg:w-2/4 gap-6">
          <div className="flex justify-start">
            <button className="rounded-2xl bg-white p-4 text-black">
              Best Cocktails
            </button>
          </div>

          <p className="font-bold leading-relaxed custom-title text-3xl lg:text-5xl">
            Where every detail matters -from muddle to garnish
          </p>
        </div>
        <div className="flex flex-col lg:w-2/6 gap-6">
          <p className="text-lg lg:text-xl about-para leading-relaxed">
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <div className="flex flex-col gap-3 rating">
            <p className="text-xl font-bold">
              <span className="text-5xl text-amber-200">4.5</span>/5
            </p>
            <p>More than +12000 customers</p>
          </div>
        </div>
      </div>
      <div className="top-grid grid  xl:grid-cols-12 gap-6">
        <div className="relative xl:col-span-3  w-full rounded-xl overflow-hidden">
          <img
            className="w-full h-72 lg:h-full object-cover"
            alt=""
            src="./images/abt1.png"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')]" />
        </div>
        <div className="relative xl:col-span-6 w-full  rounded-xl overflow-hidden">
          <img
            className=" w-full h-72 lg:h-full object-cover"
            alt=""
            src="./images/abt2.png"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')]" />
        </div>
        <div className="relative xl:col-span-3 rounded-xl overflow-hidden">
          <img
            className="w-full h-72 lg:h-full object-cover"
            alt=""
            src="./images/abt5.png"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')]" />
        </div>
      </div>
      <div className="bottom-grid grid xl:grid-cols-12 gap-6">
        <div className="relative xl:col-span-8  rounded-xl overflow-hidden">
          <img
            className=" w-full h-72 lg:h-full object-cover"
            alt=""
            src="./images/abt3.png"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')]" />
        </div>
        <div className="relative xl:col-span-4 rounded-xl overflow-hidden">
          <img
            className="w-full h-72 lg:h-full object-cover"
            alt=""
            src="./images/abt4.png"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')]" />
        </div>
      </div>
    </section>
  );
};

export default About;
