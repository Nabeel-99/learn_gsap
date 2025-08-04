import React, { useRef } from "react";
import { popularCocktails, popularMocktails } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    // text animations
    const titleSplit = new SplitText("#title", {
      type: "chars, words",
    });
    const paraSplit = new SplitText(".para", {
      type: "lines",
    });
    gsap.from(titleSplit.chars, {
      stagger: 0.06,
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "expo.out",
    });
    gsap.from(paraSplit.lines, {
      stagger: 0.06,
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "expo.out",
    });

    // leaf
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".left-leaf", { y: 300 }, 0)
      .to(".right-leaf", { y: -200 }, 0);

    //   video
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom 18%";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        scrub: true,
        start: startValue,
        end: endValue,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        duration: 1.8,
        scale: 0.8,
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center gap-40 pt-32 h-full relative w-full"
      >
        <div className="absolute inset-0 top-0 left-0 h-full w-full background " />
        <img
          className="left-leaf absolute left-0 -z-10 top-10"
          src="./images/hero-left-leaf.png"
        />
        <img
          className="right-leaf absolute right-0 -z-10 top-80"
          src="./images/hero-right-leaf.png"
        />

        <h1 id="title" className="text-[260px]  font-bold tracking-wide">
          MOJITO
        </h1>

        <div className="flex  justify-between max-w-6xl w-full ">
          <div className="flex flex-col   w-1/5 gap-2">
            <p className="para text-lg">Cool. Crisp. Classic.</p>
            <p className="para font-bold text-4xl">Sip the Spirit of Summer</p>
          </div>
          <div className="flex w-1/4 flex-col gap-2">
            <p className=" para text-lg">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
          </div>
        </div>
      </section>
      <div className="absolute top-40  -z-50 ">
        <video
          ref={videoRef}
          src="./videos/output.mp4"
          className="w-full h-full object-cover  "
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
