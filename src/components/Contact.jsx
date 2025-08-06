import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 40%",
        },
      })
      .from(".footer-left-leaf", { y: 300 }, 0)
      .from(".footer-right-leaf", { y: -50 }, "-=0.5");
  }, []);
  return (
    <footer
      id="contact"
      className="flex flex-col items-center  mt-40 overflow-hidden justify-center gap-10 min-h-screen  relative w-full"
    >
      <div className="absolute left-1/2 top-1/2 overflow-hidden  -translate-x-1/2 -translate-y-1/2 size-[600px] -z-10 bg-radial-[at_50%_50%] from-[#434343] to-transparent rounded-full blur-2xl "></div>
      <img
        className="footer-left-leaf w-32 lg:w-auto absolute left-0 -z-10 bottom-0"
        src="./images/footer-left-leaf.png"
      />
      <img
        className="footer-right-leaf w-32 lg:w-auto absolute right-0 -z-10 top-0"
        src="./images/footer-right-leaf.png"
      />
      <p className="text-3xl lg:text-5xl font-bold">Where to Find Us</p>
      <div className="flex lg:text-xl flex-col items-center gap-1">
        <p>VISIT OUR BAR</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="flex lg:text-xl flex-col items-center gap-1">
        <p>CONTACT US</p>
        <p>(123) 456-7890</p>
        <p>nufcocktails@gmail.com</p>
      </div>
      <div className="flex lg:text-xl flex-col items-center gap-1">
        <p>OPENING HOURS</p>
        <p>Mon - Fri: 9am - 10pm</p>
        <p>Sat - Sun: 10am - 11pm</p>
      </div>
      <div className="flex lg:text-xl flex-col items-center gap-2">
        <p>SOCIALS</p>
        <div className="flex items-center gap-5">
          <a href="/" className="hover:scale-110 transition-all duration-300">
            <img src="./images/insta.png" />
          </a>
          <a href="/" className="hover:scale-110 transition-all duration-300">
            <img src="./images/x.png" />
          </a>
          <a href="/" className="hover:scale-110 transition-all duration-300">
            <img src="./images/fb.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
