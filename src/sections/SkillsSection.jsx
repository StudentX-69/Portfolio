import { useEffect } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SkillBadge from "../components/SkillBadge";
import { SKILL_ICONS_ROW1, SKILL_ICONS_ROW2 } from "../assets/data";
// 1. Import the new hook (Note the name change)
import { useCanvas } from "../hooks/canvas"; 
import {
  imgEllipse6,
  imgEllipse20,
  imgEllipse21,
  imgEllipse22,
  imgEllipse23,
  imgGroup1897,
  imgGroup1907,
} from "../assets/images";

export default function SkillsSection() {
  const [ref, visible] = useFadeIn(0.15);
  // 2. Initialize the canvas ref
  const canvasRef = useCanvas(); 

  return (
    <section id="about" className="relative overflow-hidden py-32">
      {/* Content */}
      <div
        ref={ref}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center transition-all duration-700 my-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <p
          className="text-white text-xl md:text-2xl leading-relaxed mb-14"
          style={{ fontFamily: "'Preahvihear', sans-serif", letterSpacing: "0.01em" }}
        >
          Currently expanding my skills into{" "}
          <span className="text-purple-400">back-end development</span>{" "}
          while continuing to grow as a developer through hands-on practice.
        </p>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 p-2">
          {SKILL_ICONS_ROW1.map((s) => (
            <SkillBadge key={s.label} img={s.img} label={s.label} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-4  ">
          {SKILL_ICONS_ROW2.map((s) => (
            <SkillBadge key={s.label} img={s.img} label={s.label} />
          ))}
        </div>
      </div>

       <div className="absolute left-0 top-1/2  ">
      <canvas ref={canvasRef} className="relative  inset-0 h-1/3 w-full pointer-events-none z-0 "></canvas>
        </div>

      <div className="relative ">
        <div className="my-52">
          {/* Orbital ellipses */}
          <img src={imgEllipse21} alt="" aria-hidden className="pointer-events-none  select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] opacity-30 " style={{ zIndex: -4 }} />
          <img src={imgEllipse22} alt="" aria-hidden className="pointer-events-none  select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[580px] opacity-25" style={{ zIndex: -3 }} />
          <img src={imgEllipse23} alt="" aria-hidden className="pointer-events-none  select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[480px] opacity-20" style={{ zIndex: -3 }} />
        </div>

        {/* Center glow layers */}
        <img src={imgEllipse6}  alt="" aria-hidden className="pointer-events-none mt-5  select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[340px] opacity-50" style={{ zIndex: -2 }} />
        <img src={imgEllipse20} alt="" aria-hidden className="pointer-events-none mt-5 select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[180px] opacity-80" style={{ zIndex: -2 }} />

        {/* Orbit ring */}
        <img src={imgGroup1907} alt="" aria-hidden className="pointer-events-none my-10 select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[320px] opacity-60" style={{ zIndex: -1 }} />

        {/* Center logo mark */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-5">
          <img src={imgGroup1897} alt="" aria-hidden className="w-[90px] h-auto" />
        </div>
      </div>
    </section>
  );
}