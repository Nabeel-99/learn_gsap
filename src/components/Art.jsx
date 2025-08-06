import React from "react";
import { leftArt, rightArt } from "../constant";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const startValue = isMobile ? "top 20%" : "top 20%";

    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        scrub: 2.5,
        start: startValue,
        end: "+=100%",
        pin: true,
        pinSpacing: true,
      },
    });
    maskTl
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        visibility: "hidden",
        ease: "power1.inOut",
      })
      //   .set(".will-fade", { display: isMobile && "none" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        overflow: "hidden",
        duration: 4,
        ease: "power3.inOut",
      })
      .from(".masked-texts", {
        y: 10,
        opacity: 0,
        duration: 1.8,
        ease: "power1.inOut",
      });
  }, []);
  return (
    <section
      id="art"
      className="flex relative container  flex-col overflow-hidden min-h-[100vh] p-10  items-center gap-4  mt-24 lg:mt-60 w-full"
    >
      <div className="absolute left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 size-[600px] -z-10 bg-radial-[at_50%_50%] from-[#434343] to-transparent rounded-full blur-2xl "></div>
      <div className="absolute -z-10 rounded-3xl  overflow-hidden top-0  w-full  lg:w-[60vw] h-[50vh] lg:h-[60vh]  lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <img
          src="./images/under-img.jpg"
          alt=""
          className="w-full h-full rounded-3xl masked-img  overflow-hidden object-cover mask-size-[40%] lg:mask-size-[50%] mask-no-repeat mask-center mask-[url('/images/mask-img.png')]  "
        />
      </div>
      <p className="text-[80px] will-fade lg:text-[200px] tracking-tighter">
        The ART
      </p>
      <div className="flex flex-col gap-10 px-6 pt-30 lg:pt-0 lg:px-0 overflow-hidden lg:flex-row justify-between w-full max-w-7xl">
        <ul className="flex flex-col gap-3 will-fade">
          {leftArt.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src="./images/check.png" alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3 will-fade">
          {rightArt.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src="./images/check.png" alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-2xl will-fade lg:text-3xl font-bold mt-20">
        Sip - Worthy Perfection
      </p>
      <div className="text-center masked-texts">
        <h3 className="text-3xl font-bold">
          Made with Craft, Poured with Passion
        </h3>
        <p className="italic">
          This isn’t just a drink. It’s a carefully crafted moment made just for
          you.
        </p>
      </div>
    </section>
  );
};

export default Art;
