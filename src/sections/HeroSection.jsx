import { useEffect, useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import {
  imgGradient3,
  imgEllipse3,
  imgEllipse5,
  imgImage1,
  imgArrow,
} from "../assets/images";

export default function HeroSection() {
  const [ref, visible] = useFadeIn(0.1);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY <= 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-6"
    >
      {/* Gradient blob — background layer, behind all content */}
      <div id="gradient" className="absolute left-[150px]  top-[200px] overflow-hidden inset-0 pointer-events-none select-none">
      <img
        src={imgGradient3}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute h-60 ml-5  w-[350px]1/2 opacity-80 -z-1"
        style={{ zIndex: -1 }}
      />
      </div>
     
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto w-full transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
        }}
      />
        {/* Top row: avatar + greeting */}
        <div className="flex items-start gap-8 mb-4 mx-40 mt-10">
          {/* Avatar */}
          <div className="relative w-[200px] h-[200px] flex-shrink-0">
            <img
              src={imgEllipse3}
              alt=""
              aria-hidden
              className="absolute top-[100px] inset-0 w-full h-full object-cover"
            />
            <img
              src={imgImage1}
              alt="Abhay"
              className="absolute top-[120px] bottom-0 left-1/2 -translate-x-1/2 h-[175px] w-auto object-cover"
            />
            {/* Arrow decoration */}
            <div className="absolute top-0 -right-8 w-[100px]  rotate-[-135deg] scale-y-[-1]">
              <img src={imgArrow} alt="" aria-hidden className="w-full" />
            </div>
          </div>

          {/* Greeting */}
          <div className="p-4">
            <p
              className="text-white text-lg tracking-wide"
              style={{ fontFamily: "'Preahvihear', sans-serif" }}
            >
              Hello! I Am Abhay
            </p>
            <p
              className="text-white text-sm underline underline-offset-2 mt-1"
              style={{ fontFamily: "'Preahvihear', sans-serif" }}
            >
              A Designer who
            </p>
          </div>
        </div>

        {/* "Judges a book by its cover..." */}
        <div className="mb-6 ml-[400px]">
          <div className="relative inline-block mb-1">
            <img
              src={imgEllipse5}
              alt=""
              aria-hidden
              className="absolute left-[135px] -bottom-1   left-0 w-[55%] h-1/2 opacity-80 pointer-events-none"
            />
            <h2
              className="text-white font-normal leading-tight relative z-10"
              style={{
                fontFamily: "'Preahvihear', sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.1,
              }}
            >
              Judges a book
              <br />
              by its <span className="text-purple-500">cover</span>...
            </h2>
          </div>
          <p
            className="text-white text-xs mt-3"
            style={{ fontFamily: "'Preahvihear', sans-serif" }}
          >
            Because if the cover does not impress you what else can?
          </p>
        </div>

        {/* Main headline */}
        <h1
          className="text-white font-normal m-1 mx-36 "
          style={{
            fontFamily: "'Preahvihear', sans-serif",
            fontSize: "clamp(28px, 4vw, 50px)",
            letterSpacing: "0.02em",
          }}
        >
          I'm a Front-end Developer.
        </h1>

        {/* Bio */}
        <p
          className="text-white max-w-2xl leading-relaxed mx-36"
          style={{
            fontFamily: "'Preahvihear', sans-serif",
            fontSize: "clamp(14px, 1.6vw, 22px)",
            letterSpacing: "0.01em",
          }}
        >
          Final-year student with a passion for building intuitive and user-friendly digital
          experiences. Dedicated to continuous learning, exploring new technologies, and growing
          as a developer through real-world projects and daily practice.
        </p>
        <div className="absolute top-[105%] left-1/2">
          {showScrollHint && (
          <a href="#about" id="Scroll" className="scroll-down" aria-label="Scroll down">
            <div className="scroll">
              <span className="scroll-dot"></span>
            </div>
           <div className="arrow-down"></div>
          </a>
          )}
        </div>

      
    </section>
  );
}
