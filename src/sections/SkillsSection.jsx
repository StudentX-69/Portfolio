import { useEffect } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SkillBadge from "../components/SkillBadge";
import { SKILL_ICONS_ROW1, SKILL_ICONS_ROW2 } from "../assets/data";
import Glow from "../components/Glow";
// 1. Import the new hook (Note the name change)
import { useCanvas } from "../hooks/canvas"; 

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
          className="text-white text-xl md:text-2xl leading-relaxed mb-10 -mt-17"
          style={{ fontFamily: "'Preahvihear', sans-serif", letterSpacing: "0.01em" }}
        >
          Currently expanding my skills into{" "}
          <span className="text-purple-400 text-[1.75rem]">back-end development</span>{" "}
          while continuing to grow as a developer through hands-on practice.
        </p>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 p-2 -mt-4">
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

       <div className="absolute left-0 top-1/2 m-6 ">
      <canvas ref={canvasRef} className="relative  inset-0 h-1/3 w-full pointer-events-none -z-1 "></canvas>
        </div>

      <div className="relative ">
        {/* Glow behind the circle */}
         <Glow
          size={300}
          opacity={0.5}
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        
      </div>
    </section>
  );
}