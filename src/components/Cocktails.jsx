import React from "react";
import { popularCocktails, popularMocktails } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktail",
          start: "center 90%",
          scrub: true,
        },
      })
      .to(".cocktail-left-leaf", { x: -10, y: 100 }, 0)
      .to(".cocktail-right-leaf", { x: -50, y: -50 }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".cocktail-title",
          start: "top 80%",
        },
      })
      .from(".cocktail-title", { y: 10, opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item",
          start: "top 80%",
        },
      })
      .from(".item", { y: 10, opacity: 0, stagger: 0.05 });
  }, []);
  return (
    <section
      id="cocktail"
      className="background min-h-dvh relative overflow-hidden  w-full flex pt-20 justify-center "
    >
      <img
        className="absolute -left-20 -z-10 bottom-0  cocktail-left-leaf"
        src="./images/cocktail-left-leaf.png"
      />
      <img
        className="absolute  -z-10 -right-20 -bottom-10 cocktail-right-leaf"
        src="./images/cocktail-right-leaf.png"
      />
      <div className="flex max-w-6xl justify-between w-full">
        <div className="flex justify-between  w-full">
          <div className="flex flex-col gap-4">
            <p className="text-xl cocktail-title italic">
              Most popular cocktails
            </p>
            <ul className="flex flex-col gap-6">
              {popularCocktails.map((item, index) => (
                <li
                  key={index}
                  className="item flex items-center justify-between"
                >
                  <span className="font-bold text-amber-300 text-lg">
                    {item.title}
                  </span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-1/4  gap-4">
            <p className="text-xl cocktail-title italic">
              Most popular cocktails
            </p>
            <ul className="flex flex-col gap-6">
              {popularMocktails.map((item, index) => (
                <li
                  key={index}
                  className="item flex items-center justify-between"
                >
                  <span className="font-bold text-amber-300 text-lg">
                    {item.title}
                  </span>
                  <span className="font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
