import gsap from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function App() {
  return (
    <div className="flex flex-col  items-center  h-full w-screen">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
}

export default App;
