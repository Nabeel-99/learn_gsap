import React from "react";

const About = () => {
  return (
    <section className="flex flex-col gap-10 h-full w-full pt-10">
      <div className="flex justify-between w-full max-w-6xl  mx-auto">
        <div className="flex flex-col w-2/4 gap-6">
          <div className="flex justify-start">
            <button className="rounded-2xl bg-white p-4 text-black">
              Best Cocktails
            </button>
          </div>

          <p className="font-bold leading-relaxed text-5xl">
            Where every detail matters -from muddle to garnish
          </p>
        </div>
        <div className="flex flex-col w-2/6 gap-6">
          <p className="text-xl leading-relaxed">
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">
              <span className="text-5xl text-amber-200">4.5</span>/5
            </p>
            <p>More than +12000 customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
