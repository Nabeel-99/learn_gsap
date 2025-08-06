import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React from "react";

gsap.registerPlugin(ScrollToPlugin);
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 2,
        ease: "power2.inOut",
      }
    );
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, { duration: 2, scrollTo: target, offsetY: 80 });
  };
  return (
    <nav className=" z-50 fixed top-0  w-full ">
      <div className="container mx-auto items-center justify-between w-full flex flex-col gap-3 lg:flex-row p-4">
        <div className="flex items-center gap-2">
          <img alt="logo" src="./images/logo.png" />
          <p>React + GSAP</p>
        </div>
        <ul className="flex items-center gap-10">
          {" "}
          <li>
            {" "}
            <a onClick={(e) => handleScroll(e, "#cocktails")} href="#cocktails">
              Cocktails
            </a>
          </li>
          <li>
            {" "}
            <a onClick={(e) => handleScroll(e, "#about")} href="#about">
              About
            </a>
          </li>
          <li>
            {" "}
            <a onClick={(e) => handleScroll(e, "#art")} href="#art">
              Art
            </a>
          </li>
          <li>
            {" "}
            <a onClick={(e) => handleScroll(e, "#contact")} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
