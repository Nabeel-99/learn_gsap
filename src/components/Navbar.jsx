import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

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
  return (
    <nav className="flex flex-col gap-3 lg:flex-row p-4 z-50  fixed top-0  items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <img alt="logo" src="./images/logo.png" />
        <p>React + GSAP</p>
      </div>
      <ul className="flex items-center gap-10">
        <li>Cocktails</li>
        <li>About</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
